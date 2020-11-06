import React from "react";
import resumeData from "../resumeData";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <div style={{ marginRight: 10 }}>
        <img
          style={{
            position: "relative",
            width: "170px",
            height: "170px",
            borderRadius: "100%",
          }}
          src="/profilepic.jpg"
          alt="Ahmed Ali"
        />
      </div>

      <div>
        <div>
          <h1 style={{ fontSize: 50 }}>About Me</h1>
          <p style={{ fontSize: 20 }}>{resumeData.aboutme}</p>
        </div>

        <div>
          <h1 style={{ fontSize: 50 }}>Skill set</h1>

          <div>
            <div style={{ marginTop: 10 }}>
              <h2>Core</h2>
              <img
                alt="git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
              <img
                alt="github"
                src="https://img.icons8.com/fluent/96/000000/github.png"
              />
              <img
                alt="html5"
                src="https://img.icons8.com/color/96/000000/html-5.png"
              />
              <img
                alt="css3"
                src="https://img.icons8.com/color/96/000000/css3.png"
              />
              <img
                alt="javascript"
                src="https://img.icons8.com/color/96/000000/javascript.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Git, Github, Html, Css & JavaScript
              </p>
            </div>

            <div>
              <h2>Primary focuses</h2>
              <img
                alt="react"
                src="https://img.icons8.com/plasticine/100/000000/react.png"
              />
              <img
                alt="react native"
                src="https://img.icons8.com/cute-clipart/100/000000/react-native.png"
              />
              <img
                alt="electron"
                style={{ height: 80, margin: 10 }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
              />
              <img
                alt="redux"
                src="https://img.icons8.com/color/96/000000/redux.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                React, React Native, Electron & redux
              </p>
            </div>

            <div style={{ marginTop: 10 }}>
              <h2>Backend & Database tech</h2>

              <img
                alt="node.js"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
              <img
                alt="mongoDB"
                src="https://img.icons8.com/color/96/000000/mongodb.png"
              />
              <img
                alt="firebase"
                src="https://img.icons8.com/color/96/000000/firebase.png"
              />
              <img
                alt="express"
                style={{ height: 80, margin: 5 }}
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Node.js, MongoDB, Google Firebase, Express
              </p>
            </div>
            <div>
              <h2>Familiar workflow tech</h2>
              <img
                alt="jira"
                src="https://img.icons8.com/color/96/000000/jira.png"
              />
              <img
                alt="trello"
                src="https://img.icons8.com/color/96/000000/trello.png"
              />
              <img
                alt="source tree"
                src="https://img.icons8.com/windows/96/000000/sourcetree.png"
              />
              <img
                alt="slack"
                src="https://img.icons8.com/officel/80/000000/slack.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Jira, Trello, Sourcetree, Slack
              </p>
            </div>
            <div>
              <h2>Familiar design & Prototyping software </h2>
              <img
                alt="adobe xd"
                src="https://img.icons8.com/color/96/000000/adobe-xd.png"
              />
              <img
                alt="adobe illustrator"
                src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"
              />
              <img
                alt="invision"
                src="https://img.icons8.com/windows/96/000000/invision.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Adobe Xd, Illustrator, Invision
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
