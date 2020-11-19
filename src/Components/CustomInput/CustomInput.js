import React from "react";

import classes from "./CustomInput.css";

const customInput = (props) => {
  return (
    <div className={classes.InputContainer}>
      <input
        className={classes.CustomInput}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
      <p>{props.error}</p>
    </div>
  );
};
export default customInput;
