import { React } from "react";
import { OutputComponentSpan, OutputComponentDiv } from "./outputComponent";
import uniqid from "uniqid";

export default function Projects(props) {
  return (
    props.details.length > 0 && (
      <div className="detailsView">
        <h1 className="heading">Projects</h1>
        {props.details.map((f) => (
          <ProjectComponent details={f} key={uniqid()} />
        ))}
      </div>
    )
  );
}

function ProjectComponent(props) {
  return (
    <div className="details">
      <div className="detailsBroad">
        <div className="projectsMain">
          <OutputComponentSpan data={props.details.name} />
        </div>
        <div className="detailsDetails">
          <OutputComponentSpan data={props.details.time} />
        </div>
      </div>
      <OutputComponentDiv data={props.details.desc} cls="detailsDesc" />
      <div className="stack">
        {props.details.stack.split(",").map((f) => (
          <OutputComponentDiv data={f.trim()} cls="stacks" />
        ))}
      </div>
    </div>
  );
}
