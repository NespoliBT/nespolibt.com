import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/Main.min.css";
import Index from "./views/Index";
import Progetti from "./views/Progetti";
import Blog from "./views/Blog";
import Nav from "./views/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/progetti" exact component={Progetti} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
