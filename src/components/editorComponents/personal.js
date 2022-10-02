import { Component } from "react";
import InputComponent from "./inputComponent";

export default class Personal extends Component {
  render() {
    return (
      <form>
        <h1>Personal Details</h1>
        <InputComponent update={this.props.update} details={this.props.details} field="name" PH="Name" type="text"/>
        <InputComponent update={this.props.update} details={this.props.details} field="shortIntro" PH="Short Intro" type="text"/>
        <InputComponent update={this.props.update} details={this.props.details} field="email" PH="Email" type="email"/>
        <InputComponent update={this.props.update} details={this.props.details} field="phone" PH="Contact" type="number"/>
        <InputComponent update={this.props.update} details={this.props.details} field="location" PH="Location" type="text"/>
        <InputComponent update={this.props.update} details={this.props.details} field="desc" PH="Description" type="text"/>
      </form>
    );
  }
}

