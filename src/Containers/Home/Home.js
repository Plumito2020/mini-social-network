import React, { Component } from "react";

import classes from "./Home.css";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Chat from "../../Components/Chat/Chat";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Profile />
        <Posts />
        <Chat />
      </div>
    );
  }
}

export default Home;
