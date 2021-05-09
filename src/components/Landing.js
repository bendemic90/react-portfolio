import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin, AiFillFolderOpen, AiFillPhone, AiOutlineMail } from "react-icons/ai";

export default function Landing() {
    return (
        <>
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
          <a rel="noreferrer noopener" href="#/projects">
            <AiFillFolderOpen size={50} />
          </a>
        </p>
        <p className="lead">
        <AiFillPhone size={50}/><span className="">+61 437 607 555</span><br />
        <AiOutlineMail size={50} /><> </><span>ben.trevethan@gmail.com</span>
        </p>
        </>
    )
}