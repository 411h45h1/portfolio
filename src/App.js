import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Contact, Projects } from "./pages";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              margin: "0 15px 0 15px",
            }}
          >
            <div>
              <h2>Ahmed Ali</h2>
            </div>
            <div>
              <Link
                to="/"
                style={{ marginRight: "10px", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                style={{ marginRight: "10px", textDecoration: "none" }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                style={{ marginRight: "10px", textDecoration: "none" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </header>
        <body>
          <div className="Card">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </body>
        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
