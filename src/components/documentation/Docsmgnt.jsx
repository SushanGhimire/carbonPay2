import React from "react";
import { Switch, Route } from "react-router-dom";
import DocsAside from "./static/DocsAside";
import About from "./About/About";
import MerchantSignup from "./formerchant/MerchantSignup";
import MerchantSelect from "./merchantSelect/MerchantSelect";
import CarbonpayCheckout from "./carbonPayCheckout/CarbonpayCheckout";
import CarbonNeutralCheckout from "./carbonNeutral/CarbonNeutralCheckout";
import HowCarbonPayWorks from "./carbonpay/HowCarbonPayWorks";
import CarbonPayLogin from "./carbonpay/CarbonPayLogin";
import WooCommerce from "./wooCommerce/WooCommerce";
import Shopify from "./shopify/Shopify";
function Docsmgnt() {
  return (
    <div className="flex relative">
      <DocsAside />
      <div className="flex-1 flex flex-col ">
        <Switch>
          <Route exact path="/docs/aboutcarbonpay" component={About} />
          <Route exact path="/docs/merchantsignup" component={MerchantSignup} />
          <Route exact path="/docs/merchantselect" component={MerchantSelect} />
          <Route exact path="/docs/carbonpaylogin" component={CarbonPayLogin} />
          <Route
            exact
            path="/docs/howcarbonpayworks"
            component={HowCarbonPayWorks}
          />
          <Route
            exact
            path="/docs/charbonneutralcheckout"
            component={CarbonNeutralCheckout}
          />
          <Route
            exact
            path="/docs/charbonpaycheckout"
            component={CarbonpayCheckout}
          />
          <Route exact path="/docs/woocommerce" component={WooCommerce} />
          <Route exact path="/docs/shopify" component={Shopify} />
        </Switch>
      </div>
    </div>
  );
}

export default Docsmgnt;
