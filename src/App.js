import { Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./common/page-not-found";
import EmailVerification from "./components/authentication/EmailVerification";
import EmailVerify from "./components/authentication/EmailVerify";
import Login from "./components/authentication/login";
import PassWordReset from "./components/authentication/PassWordReset";
import Register from "./components/authentication/register";
import ClimateChange from "./components/web/climate_change/ClimateChange";
import Home from "./components/web/home/Home";
import offset from "./components/web/offset/offset";
import Footer from "./components/web/static/Footer";
import NavBar from "./components/web/static/NavBar";

function App(props) {
  const { loggedIn } = props;
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/climatechange" component={ClimateChange} />
        <Route exact path="/carbonoffsets" component={offset} />
        {!loggedIn && (
          <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/confirmemail" component={EmailVerification} />
            <Route
              exact
              path="/user/password-reset/:uidb64/:token"
              component={PassWordReset}
            />
            <Route
              exact
              path="/user/email-verify/:token"
              component={EmailVerify}
            />
          </>
        )}
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
