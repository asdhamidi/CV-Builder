import { Component } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: "",
        shortIntro: "",
        phone: "",
        email: "",
        location: "",
        desc: "",
      },
      work: [],
      edu: [],
    };
    this.update = this.update.bind(this);
  }

  update(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div className="app">
        <Editor update={this.update} details={this.state}></Editor>
        <Preview details={this.state}></Preview>
      </div>
    );
  }
}

export default App;
