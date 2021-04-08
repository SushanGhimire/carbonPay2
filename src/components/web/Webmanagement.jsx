import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./static/Footer";
import NavBar from "./static/NavBar";
import Home from "./home/Home";
function Webmanagement({ loggedIn }) {
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Webmanagement;
