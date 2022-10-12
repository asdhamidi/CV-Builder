import { React } from "react";
import {BsGithub} from 'react-icons/bs';

export default function TopBar() {
    return (
        <nav>
            <h1>CV Builder</h1>
            <a href="https://github.com/asdhamidi/CV-Builder"><BsGithub/></a>
        </nav>
    );
}