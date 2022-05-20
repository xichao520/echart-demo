import { Component } from "react";
import React from "react";
import * as eCharts from "echarts";
import { connect } from "react-redux";
import * as constant from "../store/constants";

class BarChart extends Component {
  eChartsRef = React.createRef();

  init = () => {
    const { barXAxis, barYAxis } = this.props;
    const myChart = eCharts.init(this.eChartsRef.current);
    console.log(barXAxis.size);
    if (barXAxis.size > 0 && barYAxis.size > 0) {
      let option = {
        xAxis: {
          type: "category",
          data: barXAxis._tail.array,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            data: barYAxis._tail.array,
          },
        ],
      };
      myChart.setOption(option);
    }

    // this.props.handleEchartPic(myChart);
  };

  componentDidMount() {
    this.init();
  }
  render() {
    console.log("barchart render");
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
    console.log("barchart componentDidUpdate");
    console.log(this.props.barXAxis);
    const myChart = eCharts.init(this.eChartsRef.current);
    let option = {
      xAxis: {
        type: "category",
        data: this.props.barXAxis,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          data: this.props.barYAxis,
        },
      ],
    };
    myChart.setOption(option);
  }
}

const mapState = (state) => ({
  picInfo: state.getIn(["echart", "picInfo"]),
  barXAxis: state.getIn(["echart", "barXAxis"]),
  barYAxis: state.getIn(["echart", "barYAxis"]),
});

const mapDispatch = (dispatch) => ({
  handleEchartPic(myChart) {
    const img = myChart.getDataURL({
      type: "png",
      pixelRatio: 2,
      backgroundColor: "#ffffff",
    });
    const action = {
      type: constant.GET_ECHART_PIC_INFO,
      picInfo: img,
    };
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(BarChart);
