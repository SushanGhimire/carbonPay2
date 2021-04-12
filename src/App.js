import { Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./common/page-not-found";
import Login from "./components/authentication/login";
import Home from "./components/web/home/Home";
import Footer from "./components/web/static/Footer";
import NavBar from "./components/web/static/NavBar";

function App(props) {
  const { loggedIn } = props;
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        {!loggedIn && (
          <>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/register" component={Register} /> */}
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
