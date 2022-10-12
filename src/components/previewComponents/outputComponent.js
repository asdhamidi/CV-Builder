import { React } from "react";

let OutputComponentSpan = (props) => <span>{props.data}</span>;
let OutputComponentDiv = (props) => <div className={props.cls}>{props.data}</div>;

export {OutputComponentDiv, OutputComponentSpan};