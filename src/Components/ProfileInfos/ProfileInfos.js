import React from "react";

import classes from "./ProfileInfos.css";

const profileInfos = (props) => {
  return (
    <div className={classes.ProfileInfos}>
      <h4>Profile</h4>
      <h6>Name</h6>
      <p>{props.name}</p>
      <h6>Adress</h6>
      <p>{props.adress}</p>
      <h6>Phone Number</h6>
      <p>{props.number}</p>
      <h6>Mail</h6>
      <p>{props.mail}</p>
    </div>
  );
};

export default profileInfos;
