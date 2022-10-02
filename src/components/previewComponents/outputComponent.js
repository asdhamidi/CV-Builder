import { Component } from "react";
 
class OutputComponentSpan extends Component {
  render() {
    return <span>{this.props.data}</span>;
  }
}
 
class OutputComponentDiv extends Component {
  render() {
    return <div className={this.props.cls}>{this.props.data}</div>;
  }
}

export {OutputComponentDiv, OutputComponentSpan};