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
        <h1 style={{ fontSize: 50 }}>About Me</h1>
        <p style={{ fontSize: 20 }}>{resumeData.aboutme}</p>

        {/* <div>
          <h2>Contact Details</h2>
          <p>
            <span>{resumeData.name}</span>
            <br></br>
            <span>{resumeData.address}</span>
            <br></br>
            <span>{resumeData.email}</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
