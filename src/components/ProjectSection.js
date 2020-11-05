import React from "react";
import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const ProjectSection = () => {
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

export default ProjectSection;
