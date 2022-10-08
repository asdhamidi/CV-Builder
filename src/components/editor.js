import { Component } from "react";
import Personal from "./editorComponents/personal";
import Works from "./editorComponents/work";
import Edu from "./editorComponents/edu";
import "../style.css";

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.personalUpdate = this.personalUpdate.bind(this);
    this.worksUpdate = this.worksUpdate.bind(this);
    this.eduUpdate = this.eduUpdate.bind(this);
    this.worksDelete = this.worksDelete.bind(this);
    this.eduDelete = this.eduDelete.bind(this);
  }

  personalUpdate(newState) {
    this.props.update({ personal: newState });
  }

  worksUpdate(item) {
    let newItem = true;

    this.props.details.work = this.props.details.work.map((w) => {
      if (w.ID === item.ID) {
          newItem = false;
          return item;
      } else return w;
    });

    if (newItem) {
      this.props.details.work = this.props.details.work.concat(item);
    }

    this.props.update({ work: this.props.details.work });
  }

  eduUpdate(item) {
    let newItem = true;

    this.props.details.edu = this.props.details.edu.map((education) => {
      if (education.ID === item.ID) {
          newItem = false;
          return item;
      } else return education;
    });

    if (newItem) {
      this.props.details.edu = this.props.details.edu.concat(item);
    }

    this.props.update({ edu: this.props.details.edu });
  }

  worksDelete(ID) {
    this.props.update({ work: this.props.details.work.filter((work) => work.ID !== ID) });
  }

  eduDelete(ID) {
    this.props.update({ edu: this.props.details.edu.filter((education) => education.ID !== ID) });
  }


  render() {
    return (
      <div className="editor">
        <Personal
          update={this.personalUpdate}
          details={this.props.details.personal}
        />
        <Works update={this.worksUpdate} delete={this.worksDelete}/>
        <Edu update={this.eduUpdate} delete={this.eduDelete} />
      </div>
    );
  }
}
