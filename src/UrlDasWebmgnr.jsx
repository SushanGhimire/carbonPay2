import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import DashboardManagement from "./components/dashboard/Dashboard-Management";
function UrlDasWebmgnr() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      <Switch>
        {loggedIn && (
          <Route path="/dashboard" component={DashboardManagement} />
        )}
        <Route path="/" render={() => <App loggedIn={loggedIn} />} />
      </Switch>
    </div>
  );
}

export default UrlDasWebmgnr;
