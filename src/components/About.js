import me from "../assets/img/slackbw.jpg"
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import {DiJavascript} from 'react-icons/di'

export default function About() {
  return (
    <div className="row">
      <div className="col">
        <img className="mebw" alt="me" src={me}/><hr />
        <p>
          Full stack web developer with over a decade background in sales.
        </p>
        <p>
          <FaReact size={30}/>
          <SiMongodb size={30}/>
          <AiOutlineConsoleSql size={30} />
          <DiJavascript size={30} />
          <FaNodeJs size={30} />
        </p>
        <p>
          Recently earned a certificate of Full Stack Web Development from University of Adelaide, and currently enrolled in the very first piscine at 42 Adelaide starting mid June 2021.
        </p>
        <p>
          I love making web-apps.
        </p>
      </div>
    </div>
  );
}
