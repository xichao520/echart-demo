import { reducer as headerReducer } from "../common/header/store/reducer";
import { reducer as homeReducer } from "../page/home/store/reducer";
import { reducer as echartReducer } from "../page/echart/store/reducer";
import { combineReducers } from "redux-immutable";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  echart: echartReducer,
});
