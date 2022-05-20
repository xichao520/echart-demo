import { fromJS } from "immutable";
import * as constant from "./constant";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set("focused", true);
    case constant.MOUSE_IN:
      return state.set("mouseIn", true);
    case constant.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constant.SEARCH_BLUR:
      return state.set("focused", false);
    case constant.CHANGE_LIST:
      return state.merge({ list: action.data, totalPage: action.totalPage });
    case constant.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
