import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin, AiFillFolderOpen } from "react-icons/ai";

export default function Jumbo() {
  return (
    <div className="jumboContainer">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h1>Ben Trevethan</h1>
        <p className="lead">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/bendemic90"
          >
            <GoMarkGithub size={50} />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/ben-trevethan-4a1b6b1b9/"
          >
            <AiFillLinkedin size={50} />
          </a>
          <a target="_blank" rel="noreferrer noopener" href="">
            <AiFillFolderOpen size={50} />
          </a>
        </p>
      </div>
      </div>
  );
}
