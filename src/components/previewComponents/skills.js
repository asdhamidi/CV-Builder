import { React } from "react";
import { OutputComponentSpan } from "./outputComponent";

export default function Skills(props) {
  let condition = props.details.languages === "" && props.details.tools === "" &&
  props.details.libs === "" &&
  props.details.other === "";

  if (!condition)
  return (
    (<div className="detailsView">
      <h1 className="heading">Skills</h1>
      <div className="skills">
        {props.details.languages !== "" && <div>Languages: </div>}
        {props.details.languages !== "" &&
          props.details.languages
            .split(",")
            .map((f) => <OutputComponentSpan data={f.trim()} />)}
      </div>
      <div className="skills">
        {props.details.tools !== "" && <div>Tools & OS: </div>}
        {props.details.tools !== "" &&
          props.details.tools
            .split(",")
            .map((f) => <OutputComponentSpan data={f.trim()} />)}
      </div>
      <div className="skills">
        {props.details.libs !== "" && <div>Libraries/Frameworks: </div>}
        {props.details.libs !== "" &&
          props.details.libs
            .split(",")
            .map((f) => <OutputComponentSpan data={f.trim()} />)}
      </div>
      <div className="skills">
        {props.details.other !== "" && <div>Other Skills: </div>}
        {props.details.other !== "" &&
          props.details.other
            .split(",")
            .map((f) => <OutputComponentSpan data={f.trim()} />)}
      </div>
    </div>
  ));
  else
  return null
}
