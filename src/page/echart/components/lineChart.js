import { Component } from "react";
import React from "react";
import * as eCharts from "echarts";
import { connect } from "react-redux";
import * as constant from "../store/constants";

class LineChart extends Component {
  eChartsRef = React.createRef();

  componentDidMount() {
    const { lineXAxis, lineYAxis } = this.props;
    const myChart = eCharts.init(this.eChartsRef.current);
    if (lineXAxis.size > 0 && lineYAxis.size > 0) {
      let option = {
        xAxis: {
          type: "category",
          data: lineXAxis._tail.array,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: lineYAxis._tail.array,
            type: "line",
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
      xAxis: {
        type: "category",
        data: this.props.lineXAxis,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: this.props.lineYAxis,
          type: "line",
        },
      ],
    };
    myChart.setOption(option);
  }
}

const mapState = (state) => ({
  lineXAxis: state.getIn(["echart", "lineXAxis"]),
  lineYAxis: state.getIn(["echart", "lineYAxis"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LineChart);
