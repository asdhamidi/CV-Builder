import { React } from "react";
import { OutputComponentSpan, OutputComponentDiv } from "./outputComponent";
import uniqid from "uniqid";

export default function Work(props) {
  return (
    <div className="detailsView">
      <h1 className="heading">Work</h1>
      {props.details.map((f) => (
        <WorkComponent details={f} key={uniqid()} />
      ))}
    </div>
  );
}

function WorkComponent(props) {
  return (
    <div className="details">
      <div className="detailsBroad">
        <div className="detailsMain">
          <OutputComponentSpan data={props.details.position} />
          <OutputComponentSpan data={props.details.company} />
        </div>
        <div className="detailsDetails">
          <OutputComponentSpan data={props.details.start} /> {" - "}
          <OutputComponentSpan data={props.details.end} />
        </div>
      </div>
      <OutputComponentDiv data={props.details.desc} cls="detailsDesc" />
    </div>
  );
}
