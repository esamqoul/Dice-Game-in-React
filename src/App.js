import React from "react";
import LoginPage from "./Component/LoginPage";
import Start from "./Component/Start";
import History from "./Component/History";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/start" component={Start} />
          <Route path="/history" component={History} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
