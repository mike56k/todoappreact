import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CustomNavbar } from "./components/CustomNavbar";
import { More } from "./pages/More";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />

      <div className="container">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/more"} component={More} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
