import { Component } from "react";
import { OutputComponentSpan } from "./outputComponent";

export default class Edy extends Component {
  render() {
    return (
      <div className="workView">
        <hr/>
        <h1>Education</h1>
        {this.props.details.map((f) => (
          <EduComponent details={f} />
        ))}
      </div>
    );
  }
}

class EduComponent extends Component {
  render() {
    let fields = this.props.details;
    return (
      <div className="edu">
        <div className="eduBroad">
          <OutputComponentSpan data={fields.course} />
          <div className="eduDetails">
            <OutputComponentSpan data={fields.institute} /> {" | "}
            <OutputComponentSpan data={fields.start} /> {" - "}
            <OutputComponentSpan data={fields.end} />
          </div>
        </div>
      </div>
    );
  }
}
