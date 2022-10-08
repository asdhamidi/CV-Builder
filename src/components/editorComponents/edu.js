import { Component } from "react";
import InputComponent from "./inputComponent";
import uniqid from "uniqid";

export default class Edu extends Component {
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
        <EduComponent
          update={this.props.update}
          delete={this.delete}
          key={newID}
          ID={newID}
        />
      ),
    });
  }

  delete(ID) {
    let items = this.state.renders.filter((edu) => edu.props.ID !== ID);
    this.setState({ renders: items });
    this.props.delete(ID);
  }

  render() {
    return (
      <div className="edu">
        <h1>Work Experience</h1>
        {this.state.renders}
        <button className="addButton"  onClick={this.addField}>Add</button>
      </div>
    );
  }
}

class EduComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        course: "",
        institute: "",
        start: "",
        end: "",
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
          field="course"
          PH="Course"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="institute"
          PH="Institute"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="start"
          PH="Start"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="end"
          PH="End"
          type="text"
        />
        <button className="deleteButton"  onClick={() => this.props.delete(this.props.ID)}>Delete</button>
      </form>
    );
  }
}
