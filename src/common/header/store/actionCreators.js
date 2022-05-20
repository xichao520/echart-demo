import axios from "axios";
import { fromJS } from "immutable";
import * as constant from "./constant";

const changeList = (data) => ({
  type: constant.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const SEARCH_FOCUS_ACTION = {
  type: constant.SEARCH_FOCUS,
};
export const MOUSE_IN = {
  type: constant.MOUSE_IN,
};
export const MOUSE_LEAVE = {
  type: constant.MOUSE_LEAVE,
};

export const SEARCH_BLUR_ACTION = {
  type: constant.SEARCH_BLUR,
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {});
  };
};

export const changePage = (page) => ({
  type: constant.CHANGE_PAGE,
  page,
});
