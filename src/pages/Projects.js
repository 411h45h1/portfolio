import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { Card } from "semantic-ui-react";
import { ProjectSection } from "../components";

const Projects = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <h1>Projects</h1>
      <Card
        style={{
          flexDirection: "row",
          width: "100%",
          whiteSpace: "nowrap",
          overflowX: "scroll",
          padding: "5px",
        }}
      >
        <Link to={`${url}/1`} style={{ marginRight: "50px" }}>
          Project 1
        </Link>
        <Link to={`${url}/2`} style={{ marginRight: "50px" }}>
          Project 2
        </Link>
        <Link to={`${url}/3`} style={{ marginRight: "50px" }}>
          Project 3
        </Link>
        <Link to={`${url}/4`} style={{ marginRight: "50px" }}>
          Project 4
        </Link>
        <Link to={`${url}/5`} style={{ marginRight: "50px" }}>
          Project 5
        </Link>
        <Link to={`${url}/6`} style={{ marginRight: "50px" }}>
          Project 6
        </Link>
        <Link to={`${url}/7`} style={{ marginRight: "50px" }}>
          Project 7
        </Link>
        <Link to={`${url}/8`} style={{ marginRight: "50px" }}>
          Project 8
        </Link>
        <Link to={`${url}/9`} style={{ marginRight: "50px" }}>
          Project 9
        </Link>
        <Link to={`${url}/10`} style={{ marginRight: "50px" }}>
          Project 10
        </Link>
      </Card>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a project.</h3>
        </Route>
        <Route path={`${path}/:projectId`}>
          <ProjectSection />
        </Route>
      </Switch>
    </Router>
  );
};

export default Projects;
