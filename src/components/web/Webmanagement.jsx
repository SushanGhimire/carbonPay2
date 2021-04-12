import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./static/Footer";
import NavBar from "./static/NavBar";
import Home from "./home/Home";
import Login from "../authentication/login";
import PageNotFound from "../../common/page-not-found";
function Webmanagement({ loggedIn }) {
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        {!loggedIn && (
          <>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/register" component={Register} /> */}
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect to="/page-not-found"></Redirect>
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default Webmanagement;
