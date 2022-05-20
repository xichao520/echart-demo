import { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/topic";
import List from "./components/list";
import Recommend from "./components/recommend";
import Writer from "./components/writer";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="https://img2.baidu.com/it/u=111713540,615806613&fm=26&fmt=auto&gp=0.jpg"
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopWindow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopWindow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo(dispatch);
    dispatch(action);
  },
  changeScrollTopWindow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
