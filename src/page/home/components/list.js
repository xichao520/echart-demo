import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListInfo, ListItem, LoadMore } from "../style";
import * as actionCreators from "../store/actionCreators";

class List extends Component {
  render() {
    const { list, page, getMoreList } = this.props;
    console.log(list);
    return (
      <div>
        {list.map((item, index) => (
          <Link key={index} to={"/detail/" + item.get("id")}>
            <ListItem>
              <img alt="" className="pic" src={item.get("imgUrl")}></img>
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    const action = actionCreators.getMoreList(page);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(List);
