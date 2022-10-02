import {Component} from "react";

export default class InputComponent extends Component {
    constructor(props) {
      super(props);
  
      this.update = this.update.bind(this);
    }
  
    update(e)
    {
      this.props.details[this.props.field] = e.target.value;
      this.props.update(this.props.details);
    }
  
    render() {
      return (
        <input type={this.props.type} placeholder={this.props.PH} onChange={this.update} />
      );
    }
  }