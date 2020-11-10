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
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          id="Links"
          style={{
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
