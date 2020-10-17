import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Main.min.css";
import Blog from "./views/Blog";
import Index from "./views/Index";
import Nav from "./views/Nav";
import Contacts from "./views/Contacts";
import Projects from "./views/Projects";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
