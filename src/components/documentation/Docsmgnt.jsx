import React from "react";
import { Switch, Route } from "react-router-dom";
import DocsAside from "./static/DocsAside";
import About from "./About.jsx/About";
import MerchantSignup from "./formerchant/MerchantSignup";
function Docsmgnt() {
  return (
    <div className="flex">
      <DocsAside />
      <div className="flex-1 flex flex-col ">
        <Switch>
          <Route exact path="/docs/aboutcarbonpay" component={About} />
          <Route exact path="/docs/merchantsignup" component={MerchantSignup} />
        </Switch>
      </div>
    </div>
  );
}

export default Docsmgnt;
