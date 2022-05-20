import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import EditableTable from "./components/editableTable";
import BarChart from "./components/barChart";
import PieChart from "./components/pieChart";
import LineChart from "./components/lineChart";

class EchartDemo extends Component {
  render() {
    return (
      <div style={{ display: "flex", direction: "row" }}>
        <EditableTable style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <PieChart />
          <BarChart />
          <LineChart />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  echartType: state.getIn(["echart", "echartType"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(EchartDemo);
