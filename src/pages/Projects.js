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
import resumeData from "../resumeData";

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
        {resumeData.portfolio.map((i) => (
          <Link to={`${url}/${i.name}`} style={{ marginRight: "50px" }}>
            {i.name}
          </Link>
        ))}
      </Card>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a project above.</h3>
        </Route>
        <Route path={`${path}/:projectName`}>
          <ProjectSection />
        </Route>
      </Switch>
    </Router>
  );
};

export default Projects;
