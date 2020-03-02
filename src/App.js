import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/Main.min.css";
import Index from "./views/Index";
import Progetti from "./views/Progetti";
import Blog from "./views/Blog";
import Nav from "./views/Nav";

function App() {
  let mobileMQ = window.matchMedia("(max-width: 800px)");
  const bg = require("./assets/sfondo.png");
  let appStyle = {
    background: "#0e0e0e"
  };

  if (!mobileMQ.matches) {
    appStyle = {
      height: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover"
    };
  }
  return (
    <div style={appStyle}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/progetti" exact component={Progetti} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
