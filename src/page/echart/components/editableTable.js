import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import "../echart.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import * as constant from "../store/constants";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "指标名称",
        dataIndex: "name",
        width: "30%",
        editable: true,
      },
      {
        title: "时间",
        dataIndex: "date",
        editable: true,
      },
      {
        title: "余额",
        dataIndex: "balance",
        editable: true,
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          name: "储蓄",
          date: "1月",
          balance: "10000",
        },
        {
          key: "1",
          name: "基金",
          date: "1月",
          balance: "20000",
        },
        {
          key: "3",
          name: "保险",
          date: "1月",
          balance: "20000",
        },
      ],
      count: 3,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `储蓄 ${count}`,
      date: "1月",
      balance: "10000",
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };
  createBarChart = () => {
    const barXAxisData = [];
    const barYAxisData = [];
    const { dataSource } = this.state;
    dataSource.map((item) => {
      barXAxisData.push(item.name);
      barYAxisData.push(item.balance);
    });
    const { toShowBarChart } = this.props;
    toShowBarChart(barXAxisData, barYAxisData);
  };
  createPieChart = () => {
    const pieChartData = [];
    const { dataSource } = this.state;
    dataSource.map((item) => {
      pieChartData.push({ value: item.balance, name: item.name });
    });
    const { toShowPieChart } = this.props;
    toShowPieChart(pieChartData);
  };
  createLineChart = () => {
    const lineXAxisData = [];
    const lineYAxisData = [];
    const { dataSource } = this.state;
    dataSource.map((item) => {
      lineXAxisData.push(item.name);
      lineYAxisData.push(item.balance);
    });
    const { toShowLineChart } = this.props;
    console.log(lineXAxisData);
    console.log(lineYAxisData);
    toShowLineChart(lineXAxisData, lineYAxisData);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div style={{ width: 600, margin: 20 }}>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          新增一行
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          pagination={false}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <div style={{ marginTop: 10 }}>
          <>
            <Button type="primary" onClick={this.createPieChart}>
              生成饼图
            </Button>
            <Button
              type="primary"
              style={{
                marginLeft: 10,
                marginRight: 10,
              }}
              onClick={this.createBarChart}
            >
              生成柱状图
            </Button>
            <Button type="primary" onClick={this.createLineChart}>
              生成线性图
            </Button>
          </>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  toShowPieChart(pieChartData) {
    const action = {
      type: constant.UPDATE_PIE_CHART,
      pieData: pieChartData,
      echartType: "1",
    };
    dispatch(action);
  },
  toShowBarChart(barXAxisData, barYAxisData) {
    const action = {
      type: constant.UPDATE_BAR_CHART,
      barXAxis: barXAxisData,
      barYAxis: barYAxisData,
      echartType: "2",
    };
    dispatch(action);
  },
  toShowLineChart(lineXAxisData, lineYAxisData) {
    const action = {
      type: constant.UPDATE_LINE_CHART,
      lineXAxis: lineXAxisData,
      lineYAxis: lineYAxisData,
      echartType: "3",
    };
    dispatch(action);
  },
});

export default connect(null, mapDispatch)(EditableTable);
