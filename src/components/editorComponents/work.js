import { Component } from "react";
import InputComponent from "./inputComponent";
import uniqid from "uniqid";

export default class Works extends Component {
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
        <WorkComponent
          update={this.props.update}
          delete={this.delete}
          key={newID}
          ID={newID}
        />
      ),
    });
  }

  delete(ID) {
    let items = this.state.renders.filter((works) => works.props.ID !== ID);
    this.setState({ renders: items });
    this.props.delete(ID);
  }

  render() {
    return (
      <div className="work">
        <h1>Work Experience</h1>
        {this.state.renders}
        <button className="addButton" onClick={this.addField}>Add</button>
      </div>
    );
  }
}

class WorkComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        company: "",
        position: "",
        start: "",
        end: "",
        desc: "",
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
          field="company"
          PH="Company"
          type="text"
        />
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="position"
          PH="Position"
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
        <InputComponent
          update={this.props.update}
          details={this.state.fields}
          field="desc"
          PH="Description"
          type="text"
        />
        <button className="deleteButton" onClick={() => this.props.delete(this.props.ID)}>Delete</button>
      </form>
    );
  }
}
