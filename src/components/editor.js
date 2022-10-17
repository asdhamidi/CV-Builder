import React from "react";
import Personal from "./editorComponents/personal";
import Work from "./editorComponents/work";
import Edu from "./editorComponents/edu";
import Projects from "./editorComponents/projects";
import "../style.css";
import Skills from "./editorComponents/skills";

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

  function projectsUpdate(item) {
    let newItem = true;

    props.details.projects = props.details.projects.map((proj) => {
      if (proj.ID === item.ID) {
        newItem = false;
        return item;
      } else return proj;
    });

    if (newItem) {
      props.details.projects = props.details.projects.concat(item);
    }

    props.update({ projects: props.details.projects });
  }

  function projectDelete(ID) {
    props.update({
      projects: props.details.projects.filter((project) => project.ID !== ID),
    });
  }

  function updateSkills(skillList) {
    props.update({skills: skillList})
  }

  return (
    <div className="editor">
      <Personal update={personalUpdate} details={props.details.personal} />
      <Work update={worksUpdate} delete={worksDelete} />
      <Edu update={eduUpdate} delete={eduDelete} />
      <Projects update={projectsUpdate} delete={projectDelete} />
      <Skills update={updateSkills} details={props.details.skills}/>
    </div>
  );
}
