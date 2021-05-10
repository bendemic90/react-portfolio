import React from "react";
import dcode from "../assets/img/dcode.png";
import cms from "../assets/img/cms.png";
import emp from "../assets/img/employee.png"

function Project() {
  return (
    <>
      <h1>projects()</h1><hr/>
      <a
        href="https://github.com/bendemic90/group-project-2"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={dcode} width="250px" alt="dcode" />
      </a>
      <br />
      <a
        href="https://github.com/bendemic90/content-management-system/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={cms} width="250px" alt="cms" />
      </a><br/>
      <a
        href="https://bendemic90.github.io/react-employee-directory/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={emp} width="250px" alt="cms" />
      </a>
    </>
  );
}

export default Project;
