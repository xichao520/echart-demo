import { Component } from "react";
import React from "react";
import * as eCharts from "echarts";
import { connect } from "react-redux";
import * as constant from "../store/constants";

class PieChart extends Component {
  eChartsRef = React.createRef();

  componentDidMount() {
    const { pieData } = this.props;
    const myChart = eCharts.init(this.eChartsRef.current);
    if (pieData.size > 0) {
      let option = {
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: pieData._tail.array,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    }
  }
  render() {
    return (
      <div>
        <div
          ref={this.eChartsRef}
          style={{ width: 300, height: 200, margin: 20 }}
        ></div>
      </div>
    );
  }

  componentDidUpdate() {
    const myChart = eCharts.init(this.eChartsRef.current);
    let option = {
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: this.props.pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }
}

const mapState = (state) => ({
  pieData: state.getIn(["echart", "pieData"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(PieChart);
