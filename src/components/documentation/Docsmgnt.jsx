import React from "react";
import { Switch, Route } from "react-router-dom";
import DocsAside from "./static/DocsAside";
import About from "./About.jsx/About";
import MerchantSignup from "./formerchant/MerchantSignup";
import MerchantSelect from "./merchantSelect/MerchantSelect";
import CarbonpayCheckout from "./carbonPayCheckout/CarbonpayCheckout";
function Docsmgnt() {
  return (
    <div className="flex ">
      <DocsAside />
      <div className="flex-1 flex flex-col ">
        <Switch>
          <Route exact path="/docs/aboutcarbonpay" component={About} />
          <Route exact path="/docs/merchantsignup" component={MerchantSignup} />
          <Route exact path="/docs/merchantselect" component={MerchantSelect} />
          <Route
            exact
            path="/docs/charbonpaycheckout"
            component={CarbonpayCheckout}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Docsmgnt;
