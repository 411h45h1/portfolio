import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Segment } from "semantic-ui-react";

const Projects = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Projects</h1>
        <Segment
          style={{
            whiteSpace: "nowrap",
            overflowX: "scroll",
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
        </Segment>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:projectId`}>
            <ProjectItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const ProjectItem = () => {
  let { projectId } = useParams();

  return (
    <div>
      <Segment>
        <h3>Project {projectId}</h3>Pellentesque habitant morbi tristique
        senectus.
      </Segment>
    </div>
  );
};

export default Projects;
