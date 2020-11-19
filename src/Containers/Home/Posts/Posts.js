import React, { Component } from "react";

import classes from "./Posts.css";
import NewPost from "../NewPost/NewPost";
import Post from "../../../Components/Post/Post";

class Posts extends Component {
  render() {
    return (
      <div className={classes.Posts}>
        <NewPost />

        <div className={classes.PostsWall}>
          <h4>My wall</h4>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    );
  }
}

export default Posts;
