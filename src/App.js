import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { Header } from "./components";
import { Media, MediaContextProvider } from "./core/media";
import { Home, Contact, Projects, Experience } from "./pages";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MediaContextProvider>
          <Media at="mobile">
            <Header flexDirection="column" linkSize={14} />
          </Media>

          <Media greaterThan="mobile">
            <Header flexDirection="row" linkSize={25} />
          </Media>

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
                <Route exact strict path="/">
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
        </MediaContextProvider>
      </div>
    </Router>
  );
};

export default App;
