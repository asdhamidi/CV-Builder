import { React } from "react";

export default function InputComponent(props) {
  function update(e) {
    props.details[props.field] = e.target.value;
    props.update(props.details);
  }

  return (
    <input
      type={props.type}
      placeholder={props.PH}
      onChange={update}
    />
  );
}
