import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  SEARCH_BLUR_ACTION,
  SEARCH_FOCUS_ACTION,
  getList,
  changePage,
  MOUSE_IN,
  MOUSE_LEAVE,
} from "./store/actionCreators";

class Header extends Component {
  getListArea = () => {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleChangePage,
      handleMouseIn,
      handleMouseLeave,
    } = this.props;
    const pageList = [];
    const newList = list.toJS();
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;

    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              {this.getListArea(focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // 等价于state.get('header').get('focused')
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list.size);
      if (list.size === 0) {
        dispatch(getList());
      }
      dispatch(SEARCH_FOCUS_ACTION);
    },
    handleMouseIn() {
      dispatch(MOUSE_IN);
    },
    handleMouseLeave() {
      dispatch(MOUSE_LEAVE);
    },
    handleInputBlur() {
      dispatch(SEARCH_BLUR_ACTION);
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(changePage(page + 1));
      } else {
        dispatch(changePage(1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
