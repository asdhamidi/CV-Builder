import { Component } from "react";
import InputComponent from "./inputComponent";
import uniqid from "uniqid";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renders: [],
    };

    this.addField = this.addField.bind(this);
    this.delete = this.delete.bind(this);
  }

  addField() {
    let newID = uniqid();
    this.setState({
      renders: this.state.renders.concat(
        <ProjectComponent
          update={this.props.update}
          delete={this.delete}
          key={newID}
          ID={newID}
        />
      ),
    });
  }

  delete(ID) {
    let items = this.state.renders.filter((proj) => proj.props.ID !== ID);
    this.setState({ renders: items });
    this.props.delete(ID);
  }

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        {this.state.renders}
        <button className="addButton"  onClick={this.addField}>Add</button>
      </div>
    );
  }
}

class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: "",
        desc: "",
        time: "",
        stack: "",
        ID: this.props.ID,
      },
    };
  }

  render() {
    return (
      <form className="workForm">
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="name"
          PH="Name"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="desc"
          PH="Description"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="time"
          PH="Time"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="stack"
          PH="Tech Stack (e.g Python, JS, ...)"
          type="text"
        />
        <button className="deleteButton"  onClick={() => this.props.delete(this.props.ID)}>Delete</button>
      </form>
    );
  }
}
