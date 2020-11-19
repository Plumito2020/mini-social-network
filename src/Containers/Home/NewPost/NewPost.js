import React, { Component } from "react";

import classes from "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div className={classes.NewPost}>
        <h4>New Post</h4>
        <textarea className={classes.AddPost}></textarea>
        <button className={classes.Button}>Publish</button>
      </div>
    );
  }
}

export default NewPost;
