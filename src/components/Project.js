import React from "react";
import dcode from "../assets/img/dcode.png";
import socials from "../assets/img/socials.png";
import emp from "../assets/img/employee.png"
import trailer from "../assets/img/trailer.png"

function Project() {
  const projectsStr = '[{}]'
  return (
    <>
      <h1>projects{projectsStr}</h1><hr/>
      <a
        href="https://github.com/bendemic90/content-management-system/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={socials} width="250px" alt="cms" />
      </a>
      <p>
        Memory sharing app, with Google OAuth and user login with JWTs. <br/>
        Front end: <i>@material-UI, React.js, redux, axios.</i> <br/>
        Back end: <i>mongoose, express(), JWT, bcrypt, Node.</i>
      </p>
      <a
        href="https://github.com/bendemic90/group-project-2"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={dcode} width="250px" alt="dcode" />
      </a>
      <p>DCODE is a modern tool for developers, specifically full-stack developers. The content within DCODE includes many helpful function documentations. Our goal in this project was to provide an 'encyclopedia' of code that will help beginners and advanced developers alike!</p>
      <a
        href="https://github.com/BenjaminLee-boop/Trailer-Sailor"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={trailer} width="250px" alt="dcode" />
      </a>
      <p>
        The initial idea of Trailer-Sailor was to make the acquisition of a trailer easier, as it is not uncommon for streaming services to not include it in their libraries. Uses Google/Youtube API and OMDB API concurrently.
      </p>
      <a
        href="https://bendemic90.github.io/react-employee-directory/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="dcode" src={emp} width="250px" alt="cms" />
      </a>
      <p>
        A create-react-app which loads a table filled with 30 random employees from RandomUserAPI. Dynamic filtering, sorting, and entirely function based with hooks - as opposed to Classes.
      </p>
    </>
  );
}

export default Project;
