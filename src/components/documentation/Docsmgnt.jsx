import React from "react";
import { Switch, Route } from "react-router-dom";
import DocsAside from "./static/DocsAside";
import DocsHome from "./DocsHome";
import Plugins from "./plugins/Plugins";
function Docsmgnt() {
  return (
    <div className="flex">
      <DocsAside />
      <div className="flex-1 flex flex-col overflow-auto">
        <Switch>
          <Route exact path="/docs" component={DocsHome} />
          <Route exact path="/docs/plugins" component={Plugins} />
        </Switch>
      </div>
    </div>
  );
}

export default Docsmgnt;
