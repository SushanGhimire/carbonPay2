import { Route, Switch } from "react-router";
import NavBar from "./Static/NavBar";
import Aside from "./Static/Aside";
import Home from "./Home/Home";
import Payment from "../dashboard/payment/Payment";
import Balance from "../dashboard/balance/Balance";
function DashboardManagement() {
  return (
    <div className="bg-white h-screen flex font-rubik">
      <Aside />
      <div className="flex-1 flex flex-col overflow-auto">
        <NavBar />
        <Switch>
          <Route exact path="/dashboard" component={Home}></Route>
          <Route exact path="/dashboard/payments" component={Payment}></Route>
          <Route exact path="/dashboard/balances" component={Balance}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashboardManagement;
