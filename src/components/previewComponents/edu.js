import { React } from "react";
import { OutputComponentSpan } from "./outputComponent";
import uniqid from "uniqid";

export default function Edu(props) {
  return (
    props.details.length > 0 && (
      <div className="detailsView">
        <h1 className="heading">Education</h1>
        {props.details.map((f) => (
          <EduComponent details={f} key={uniqid()} />
        ))}
      </div>
    )
  );
}

function EduComponent(props) {
  return (
    <div className="details">
      <div className="detailsBroad">
        <div className="detailsMain">
          <OutputComponentSpan data={props.details.course} />
          <OutputComponentSpan data={props.details.institute} />
        </div>
        <div className="detailsDetails">
          <OutputComponentSpan data={props.details.start} /> {" - "}
          <OutputComponentSpan data={props.details.end} />
        </div>
      </div>
    </div>
  );
}
