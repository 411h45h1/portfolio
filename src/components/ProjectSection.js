import React from "react";
import { useParams } from "react-router-dom";
import { Button, Icon, Label, Segment } from "semantic-ui-react";
import resumeData from "../resumeData";

const ProjectSection = () => {
  let { projectName } = useParams();

  const dataObj = resumeData.portfolio.find((obj) => {
    return obj.name === projectName;
  });

  const name = dataObj.name;
  const description = dataObj.description;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Segment
        compact
        inverted
        color="grey"
        style={{
          width: "40%",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {dataObj.imgurl && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
          >
            <img
              alt="cartoon preview"
              src={dataObj.imgurl}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {dataObj.url !== null ? (
              <Label as="a" href={dataObj.url} target="_blank">
                <Icon name="world" size="large" /> Live Site
              </Label>
            ) : null}
            {dataObj.repourl !== null ? (
              <Label as="a" href={dataObj.repourl} target="_blank">
                <Icon name="github" size="large" /> Repository
              </Label>
            ) : null}
          </div>

          {dataObj.url === null && dataObj.repourl === null ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                alt="android"
                src={dataObj.android.imgurl}
                style={{ height: "90px", width: "90px" }}
              />

              <img
                alt="World wide web"
                src={dataObj.website.imgurl}
                style={{ height: "60px", width: "60px" }}
              />

              <img
                alt="ios"
                src={dataObj.ios.imgurl}
                style={{ height: "90px", width: "90px" }}
              />
            </div>
          ) : null}

          {dataObj.android && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {dataObj.android.url !== null ? (
                <Button
                  icon="google play"
                  compact
                  size="large"
                  as="a"
                  href={dataObj.android.url}
                  target="_blank"
                />
              ) : null}
              {dataObj.website.url !== null ? (
                <Button
                  icon="world"
                  size="large"
                  as="a"
                  href={dataObj.website.url}
                  target="_blank"
                />
              ) : null}
              {dataObj.ios.url !== null ? (
                <Button
                  icon="app store ios"
                  size="large"
                  as="a"
                  href={dataObj.ios.url}
                  target="_blank"
                />
              ) : null}
            </div>
          )}
        </div>
      </Segment>
      <Segment compact style={{ width: "50%", margin: 0 }}>
        <h2>{name}</h2>
        <p style={{ fontSize: 18 }}>{description}</p>
      </Segment>
    </div>
  );
};

export default ProjectSection;
