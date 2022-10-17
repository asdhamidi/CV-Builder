import InputComponent from "./inputComponent";

export default function Skills(props) {
  return (
    <div className="personal">
      <h1>Skills</h1>
      <InputComponent
        update={props.update}
        details={props.details}
        field="languages"
        PH="Languages"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="tools"
        PH="Tools & OS"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="libs"
        PH="Libraries/Frameworks"
        type="text"
      />
      <InputComponent
        update={props.update}
        details={props.details}
        field="other"
        PH="Other"
        type="text"
      />
    </div>
  );
}
