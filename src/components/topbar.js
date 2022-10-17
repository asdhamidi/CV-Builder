import { React, useState } from "react";
import { BsGithub } from "react-icons/bs";

export default function TopBar() {
  const [classList, updateClasses] = useState([]);

  setTimeout(() => {
    updateClasses(["nav-active"]);
  }, 50);

  return (
    <nav className={classList}>
      <h1>CV Builder</h1>
      <a href="https://github.com/asdhamidi/CV-Builder">
        <BsGithub />
      </a>
    </nav>
  );
}
