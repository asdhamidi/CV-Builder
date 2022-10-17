import { React } from "react";
import Personal from "./previewComponents/personal";
import Works from "./previewComponents/work";
import Edu from "./previewComponents/edu";
import Projects from "./previewComponents/projects";
import Skills from "./previewComponents/skills";
import "../style.css";

export default function Preview(props) {
  return (
    <div className="preview">
      <Personal details={props.details.personal}/>
      <Works details={props.details.work} />
      <Edu details={props.details.edu}/>
      <Projects details={props.details.projects} />
      <Skills details={props.details.skills} />
    </div>
  );
}