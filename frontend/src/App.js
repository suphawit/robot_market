import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Market from "./components/market";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Market} />
      </Switch>
    </Router>
  );
}

export default App;
