import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Icon, Segment } from "semantic-ui-react";
import { Home, Contact, Projects, Experience } from "./pages";
import resumeData from "./resumeData";

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

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: "0 15px 0 15px",
          }}
        >
          <div>
            <h1 id="Name">{resumeData.name}</h1>
          </div>
          <div>
            <Link
              to="/"
              style={{
                marginRight: "10px",
                textDecoration: "none",
                fontSize: 20,
              }}
            >
              Home
            </Link>
            <Link
              to="/projects"
              style={{
                marginRight: "10px",
                textDecoration: "none",
                fontSize: 20,
              }}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              style={{
                marginRight: "10px",
                textDecoration: "none",
                fontSize: 20,
              }}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              style={{
                marginRight: "10px",
                textDecoration: "none",
                fontSize: 20,
              }}
            >
              Contact
            </Link>
            <a
              href="https://github.com/AhmedAlihashi"
              target="_blank"
              rel="noreferrer"
              id="githubLink"
            >
              <Icon
                name="github square"
                size="big"
                //
              />
            </a>
          </div>
        </header>
        <div
          style={{
            height: "90vh",
            backgroundColor: "whitesmoke",
          }}
        >
          <Segment
            style={{
              margin: "10px",
              height: "95%",
              background: "#dde1e7",
              borderRadius: "5px",
              boxShadow:
                "-3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945)",
              padding: "20px",
              overflowY: "scroll",
            }}
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Segment>
        </div>
      </div>
    </Router>
  );
};

export default App;
