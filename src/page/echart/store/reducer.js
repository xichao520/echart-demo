import { fromJS } from "immutable";
import * as constant from "./constants";

const defaultState = fromJS({
  echartType: "0",
  picInfo: "",
  barXAxis: [],
  barYAxis: [],
  pieData: [],
  lineXAxis: [],
  lineYAxis: [],
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.GET_ECHART_PIC_INFO:
      return state.set("picInfo", action.picInfo);
    case constant.UPDATE_BAR_CHART:
      return state.merge({
        barXAxis: action.barXAxis,
        barYAxis: action.barYAxis,
        echartType: action.echartType,
      });
    case constant.UPDATE_PIE_CHART:
      return state.merge({
        pieData: action.pieData,
        echartType: action.echartType,
      });
    case constant.UPDATE_LINE_CHART:
      return state.merge({
        lineXAxis: action.lineXAxis,
        lineYAxis: action.lineYAxis,
        echartType: action.echartType,
      });
    case constant.UPDATE_CHART_TYPE:
      return state.set("echartType", action.echartType);
    default:
      return state;
  }
};
