import { Route, Switch } from "react-router";
import React, { useState } from "react";
import NavBar from "./Static/NavBar";
import Aside from "./Static/Aside";
import Home from "./Home/Home";
import Payment from "../dashboard/payment/Payment";
// import Balance from "../dashboard/balance/Balance";
import StripeRegForm from "./StripeRegForm.jsx/StripeRegForm";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
import Profile from "./profile/Profile";
import EmailVerification from "../authentication/EmailVerification";
import Billing from "./billing/Billing";
import Integration from "./integration/Integration";
function DashboardManagement() {
  const token = localStorage.getItem("access");
  const [redirect, setRedirect] = useState("");
  const [isForm, setIsForm] = useState(false);
  const [loading, setLoading] = useState(false);
  // const form = () => {
  //   setIsForm(false);
  // };
  const submitMerchatForm = (formData) => {
    setLoading(true);
    axios
      .post(`${baseUrl}/merchants/create-stripe-account/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // setLoading(false);
        setIsForm(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.data.code === "token_not_valid") {
          localStorage.clear();
          window.location = "/";
        } else {
          alert("Internal Server Error");
        }
      });
  };
  const handleVerify = () => {
    axios
      .get(`${baseUrl}/merchants/check-stripe-verified/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRedirect(res.data.redirect_url);
        console.log(redirect);
      })
      .catch((err) => {
        if (err.response.data.code === "token_not_valid") {
          localStorage.clear();
          window.location = "/";
        }
      });
  };

  return (
    <div className="bg-white h-screen flex font-rubik relative">
      {isForm && (
        <StripeRegForm
          className=""
          loading={loading}
          submitMerchatForm={submitMerchatForm}
        />
      )}
      {!isForm && (
        <>
          <Aside />
          <div className="flex-1 flex flex-col overflow-auto">
            <NavBar handleVerify={handleVerify} />
            <Switch>
              <Route exact path="/dashboard/home" component={Home}></Route>
              <Route
                exact
                path="/dashboard/userprofile"
                component={Profile}
              ></Route>
              <Route
                path="/dashboard/confirmemail"
                component={EmailVerification}
              />
              <Route
                exact
                path="/dashboard/transaction"
                component={Payment}
              ></Route>
              <Route
                exact
                path="/dashboard/integrations"
                component={Integration}
              ></Route>
              {/* <Route
                exact
                path="/dashboard/balances"
                component={Balance}
              ></Route> */}
              <Route
                exact
                path="/dashboard/billing"
                component={Billing}
              ></Route>
              <Route
                exact
                path="/dashboard/verify"
                component={() => {
                  window.location.href = `${redirect}`;
                  return null;
                }}
              ></Route>
              {/* <Route
            exact
            path="/dashboard/stripeform"
            component={StripeRegForm}
          ></Route> */}
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardManagement;
