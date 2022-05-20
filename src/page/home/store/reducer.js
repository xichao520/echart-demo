import { fromJS } from "immutable";
import * as constant from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.articleList),
    articlePage: action.nextPage,
  });
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constant.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constant.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
