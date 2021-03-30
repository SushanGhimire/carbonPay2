import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Payment from "./components/dashboard/payment/Payment";
import Balance from "./components/dashboard/balance/Balance";
import webPage from "./components/web/webPage";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={webPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/payments" component={Payment}></Route>
        <Route path="/balances" component={Balance}></Route>
      </Switch>
    </div>
  );
}

export default App;
