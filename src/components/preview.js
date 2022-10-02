import { Component } from "react";
import Personal from "./previewComponents/personal";
import Works from "./previewComponents/work";
import Edu from "./previewComponents/edu";
import "../style.css";

export default class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <Personal details={this.props.details.personal}/>
        <Works details={this.props.details.work} />
        <Edu details={this.props.details.edu}/>
      </div>
    );
  }
}
