import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

//GET ALL THE DATA OF reducers FILE
const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);

//null to indicate that dont have any state to get
// export default connect(null, { fetchPosts })(PostList);
