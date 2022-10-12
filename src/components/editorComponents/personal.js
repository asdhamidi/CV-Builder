import InputComponent from "./inputComponent";
import React from "react";

export default function Personal(props) {
  return (
    <div className="personal">
      <h1>Personal Details</h1>
      <InputComponent
        update={props.update}
        details={props.details}
        field="name"
        PH="Name"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="shortIntro"
        PH="Short Intro"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="email"
        PH="Email"
        type="email"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="phone"
        PH="Contact"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="location"
        PH="Location"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="desc"
        PH="Description"
        type="text"
      />
    </div>
  );
}
