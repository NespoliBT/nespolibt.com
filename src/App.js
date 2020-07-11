import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Main.min.css";
import Blog from "./views/Blog";
import Index from "./views/Index";
import Nav from "./views/Nav";
import Contacts from "./views/Contacts";
import Progetti from "./views/Progetti";

function App() {
  let mobileMQ = window.matchMedia("(max-width: 800px)");
  const bg = require("./assets/sfondo.png");
  let appStyle = {
    background: "#0e0e0e",
  };

  if (!mobileMQ.matches) {
    appStyle = {
      height: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
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
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
