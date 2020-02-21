import React from "react";
import EditorBody from "./editorBody";
import EditorControls from "./editorControls";

const Editor = () => {
  return (
    <div className="editor">
      <EditorBody />
      <EditorControls />
    </div>
  );
};

export default Editor;
