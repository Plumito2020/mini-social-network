import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Posts.css";
import NewPost from "../NewPost/NewPost";
import Post from "../../../Components/Post/Post";

class Posts extends Component {
  render() {
    const posts = this.props.posts.map((post) => (
      <Post body={post.content} key={post.id} />
    ));

    return (
      <div className={classes.Posts}>
        <NewPost />

        <div className={classes.PostsWall}>
          <h4>Latest posts</h4>
          {posts}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
