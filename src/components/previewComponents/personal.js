import { React } from "react";
import { OutputComponentDiv } from "./outputComponent";

let Personal = (props) => (
  <div className="personalView">
    <div className="intro">
      <div className="shortIntro">
        <h1 className="name">{props.details.name}</h1>
        <h2>{props.details.shortIntro}</h2>
      </div>
      <div className="contact">
        <OutputComponentDiv data={props.details.email} />
        <OutputComponentDiv data={props.details.phone} />
        <OutputComponentDiv data={props.details.location} />
      </div>
    </div>
    <OutputComponentDiv cls="description" data={props.details.desc} />
  </div>
);

export default Personal;
