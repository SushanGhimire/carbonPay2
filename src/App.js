import { Switch, Route } from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard";
// import Payment from "./components/dashboard/payment/Payment";
// import Balance from "./components/dashboard/balance/Balance";
import NavBar from "./components/web/static/NavBar";
import Footer from "./components/web/static/Footer";
import Home from "./components/web/home/Home";
function App({ loggedIn }) {
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/payments" component={Payment}></Route>
        <Route path="/balances" component={Balance}></Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
