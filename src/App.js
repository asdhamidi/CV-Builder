import { Component } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: "Name Surname",
        shortIntro: "Short Intro",
        phone: "+91 9876543210",
        email: "email@lmaomail.com",
        location: "Place, BiggerPlace",
        desc: "A longer description where you brag about your skills and sprinkle lies, as per taste.",
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
