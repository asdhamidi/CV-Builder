import { React, useState } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import TopBar from "./components/topbar";
import ColorChanger from "./components/colorChanger";

export default function App() {
  const [data, setData] = useState({
    personal: {
      name: "Michael Scott",
      shortIntro: "Motivated. Energetic. Popular.",
      phone: "+1 654 3210",
      email: "m.scott@dundermifflin.com",
      location: "Scranton, Pennsylvania",
      desc: "Regional Manager of the Scranton branch of Dunder Mifflin with over 10 years of experience in sales and leading the branch.",
    },
    work: [],
    edu: [],
    projects: [],
    skills: {
      languages: "",
      tools: "",
      libs: "",
      other: "",
    },
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
