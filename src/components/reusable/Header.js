import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import resumeData from "../../resumeData";

const Header = ({ flexDirection, linkSize }) => {
  return (
    <header
      style={{
        height: "10vh",
        backgroundColor: "silver",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: flexDirection,
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
            fontSize: linkSize,
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          style={{
            marginRight: "10px",
            textDecoration: "none",
            fontSize: linkSize,
          }}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          style={{
            marginRight: "10px",
            textDecoration: "none",
            fontSize: linkSize,
          }}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          style={{
            marginRight: "10px",
            textDecoration: "none",
            fontSize: linkSize,
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
  );
};

export default Header;
