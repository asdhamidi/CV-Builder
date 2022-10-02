import { Component } from "react";
import { OutputComponentDiv } from "./outputComponent";

export default class Personal extends Component {
  render() {
    return (
      <div className="personal">
        <div className="intro">
          <div className="shortIntro">
            <h1>{this.props.details.name}</h1>
            <h2>{this.props.details.shortIntro}</h2>
          </div>
          <div className="contact">
            <OutputComponentDiv data={this.props.details.email}/>
            <OutputComponentDiv data={this.props.details.phone}/>
            <OutputComponentDiv data={this.props.details.location}/>
          </div>
        </div>
        <OutputComponentDiv cls="description" data={this.props.details.desc}/>
      </div>
    );
  }
}
