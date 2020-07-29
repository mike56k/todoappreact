import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CustomNavbar } from "./components/CustomNavbar";
import { FirebaseState } from "./firebase/firebaseState";
function App() {
  return (
    <FirebaseState>
      <BrowserRouter>
        <CustomNavbar />

        <div className="container">
          <Switch>
            <Route path={"/todoappreact"} exact component={Home} />
            <Route path={"/todoappreact/about"} component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
