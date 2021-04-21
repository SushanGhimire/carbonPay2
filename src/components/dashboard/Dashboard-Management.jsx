import { Route, Switch } from "react-router";
import React, { useState } from "react";
import NavBar from "./Static/NavBar";
import Aside from "./Static/Aside";
import Home from "./Home/Home";
import Payment from "../dashboard/payment/Payment";
import Balance from "../dashboard/balance/Balance";
import StripeRegForm from "./StripeRegForm.jsx/StripeRegForm";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
function DashboardManagement() {
  const token = localStorage.getItem("access");
  const [redirect, setRedirect] = useState("");
  const handleVerify = () => {
    console.log("parent");
    axios
      .get(`${baseUrl}/merchants/signup-stripe-onboard/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRedirect(res.data.redirect_url);
        console.log(redirect);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white h-screen flex font-rubik">
      <Aside />
      <div className="flex-1 flex flex-col overflow-auto">
        <NavBar handleVerify={handleVerify} />
        <Switch>
          <Route exact path="/dashboard" component={Home}></Route>
          <Route exact path="/dashboard/payments" component={Payment}></Route>
          <Route exact path="/dashboard/balances" component={Balance}></Route>
          <Route
            exact
            path="/dashboard/verify"
            component={() => {
              window.location.href = `${redirect}`;
              return null;
            }}
          ></Route>
          <Route
            exact
            path="/dashboard/stripeform"
            component={StripeRegForm}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashboardManagement;
