import React, { Component } from "react";

import classes from "./Home.css";
import Posts from "./Posts/Posts";
import Profile from "../../Components/Profile/Profile";
import Chat from "../../Components/Chat/Chat";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Profile></Profile>
        <Posts></Posts>
        <Chat></Chat>
      </div>
    );
  }
}

export default Home;
