import React from "react";
import classes from "./Post.css";

const post = (props) => {
  return (
    <div className={classes.Post}>
      <h6>Azziz Zakaria</h6>
      <p>{props.body}</p>
    </div>
  );
};

export default post;
