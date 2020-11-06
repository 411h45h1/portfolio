import React from "react";
import resumeData from "../resumeData";

const Contact = () => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p style={{ fontSize: 20 }}>
        <span>{resumeData.name}</span>
        <br></br>
        <span>{resumeData.address}</span>
        <br></br>
        <span>{resumeData.email}</span>
      </p>
    </div>
  );
};

export default Contact;
