import { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => {
          return (
            <TopicItem key={item.get("id")}>
              <img alt="" className="topic-pic" src={item.get("imgUrl")}></img>
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "topicList"]),
});

export default connect(mapState, null)(Topic);
