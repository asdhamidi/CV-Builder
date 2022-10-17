import { React, useState } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import TopBar from "./components/topbar";
import ColorChanger from "./components/colorChanger";

export default function App() {
  const [data, setData] = useState({
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
    projects: [],
    skills: {
      languages: "",
      tools: "",
      libs: "",
      other: ""
    }
  });

  function update(newData) {
    setData({ ...data, ...newData });
  }

  return (
    <div className="app">
      <TopBar />
      <main>
        <Editor update={update} details={data}></Editor>
        <Preview details={data}></Preview>
      </main>
      <ColorChanger />
    </div>
  );
}
