import { useEffect } from "react";
import { Remark } from "react-remark";
// @ts-ignore
import Prism from "prismjs";
import "../styles/prism-theme.css";

const Viewer = (props: any) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="html-viewer">
      <Remark>{props.text}</Remark>
    </div>
  );
};

export default Viewer;
