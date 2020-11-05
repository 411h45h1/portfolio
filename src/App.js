import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Contact, Projects } from "./pages";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            height: "10vh",
            backgroundColor: "silver",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              margin: "15px 15px 0 15px",
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
        <body
          style={{
            height: "85vh",
            backgroundColor: "whitesmoke",
          }}
        >
          <div
            style={{
              margin: "10px",
              height: "90%",
              background: "#dde1e7",
              borderRadius: "5px",
              boxShadow:
                "-3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945)",
            }}
          >
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
        <footer
          style={{
            height: "5vh",
            backgroundColor: "silver",
          }}
        ></footer>
      </div>
    </Router>
  );
};

export default App;
