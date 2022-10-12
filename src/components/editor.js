import React from "react";
import Personal from "./editorComponents/personal";
import Work from "./editorComponents/work";
import Edu from "./editorComponents/edu";
import "../style.css";

export default function Editor(props) {
  function personalUpdate(newState) {
    props.update({ personal: newState });
  }

  function worksUpdate(item) {
    let newItem = true;

    props.details.work = props.details.work.map((w) => {
      if (w.ID === item.ID) {
        newItem = false;
        return item;
      } else return w;
    });

    if (newItem) {
      props.details.work = props.details.work.concat(item);
    }

    props.update({ work: props.details.work });
  }

  function eduUpdate(item) {
    let newItem = true;

    props.details.edu = props.details.edu.map((education) => {
      if (education.ID === item.ID) {
        newItem = false;
        return item;
      } else return education;
    });

    if (newItem) {
      props.details.edu = props.details.edu.concat(item);
    }

    props.update({ edu: props.details.edu });
  }

  function worksDelete(ID) {
    props.update({
      work: props.details.work.filter((work) => work.ID !== ID),
    });
  }

  function eduDelete(ID) {
    props.update({
      edu: props.details.edu.filter((education) => education.ID !== ID),
    });
  }

  return (
    <div className="editor">
      <Personal update={personalUpdate} details={props.details.personal} />
      <Work update={worksUpdate} delete={worksDelete} />
      <Edu update={eduUpdate} delete={eduDelete} />
    </div>
  );
}
