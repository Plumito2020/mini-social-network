import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./NewPost.css";

class NewPost extends Component {
  state = {
    postContent: "",
  };

  onChangeHandler = (event) => {
    this.setState({ postContent: event.target.value });
  };

  clear = () => {
    this.setState({ postContent: "" });
  };

  addPost = () => console.log(this.state.postContent);
  render() {
    return (
      <div className={classes.NewPost}>
        <h4>New Post</h4>
        <textarea
          className={classes.AddPost}
          value={this.state.postContent}
          onChange={this.onChangeHandler}
        ></textarea>
        <button
          className={classes.Button}
          onClick={() => {
            this.props.addPost(this.state.postContent);
            this.clear();
          }}
        >
          POST
        </button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//       ctr: state.ctr.counter,
//       storedResults: state.res.results
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) =>
      dispatch({ type: "ADD_POST", data: newPost, id: Date() }),
  };
};

export default connect(null, mapDispatchToProps)(NewPost);
