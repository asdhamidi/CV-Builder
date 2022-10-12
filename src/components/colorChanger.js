import { React } from "react";

export default function ColorChanger() {
  function clickHandler(colorName) {
    document
      .querySelector(":root")
      .style.setProperty("--base-resume-color", colorName);
  }
  return (
    <div className="colorPane">
      <div className="colorBox" onClick={() => clickHandler("purple")} />
      <div className="colorBox" onClick={() => clickHandler("blue")} />
      <div className="colorBox" onClick={() => clickHandler("green")} />
      <div className="colorBox" onClick={() => clickHandler("#195c70")} />
      <div className="colorBox" onClick={() => clickHandler("mediumslateblue")} />
    </div>
  );
}
