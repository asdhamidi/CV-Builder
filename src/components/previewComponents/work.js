import { Component } from "react";
import { OutputComponentDiv, OutputComponentSpan } from "./outputComponent";

export default class Works extends Component {
  render() {
    return (
      <div className="workView">
        <hr/>
        <h1>Work Experience</h1>
        {this.props.details.map((f) => (
          <WorkComponent details={f} />
        ))}
      </div>
    );
  }
}

class WorkComponent extends Component {
  render() {
    let fields = this.props.details;
    return (
      <div className="work">
        <div className="workBroad">
          <OutputComponentSpan data={fields.position} />
          <div className="workDetails">
            <OutputComponentSpan data={fields.company} /> {" | "}
            <OutputComponentSpan data={fields.start} /> {" - "}
            <OutputComponentSpan data={fields.end} />
          </div>
        </div>
        <OutputComponentDiv data={fields.desc} cls="workDesc" />
      </div>
    );
  }
}
