import React, { useEffect } from "react";
import "./textEditor.css";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { io } from "socket.io-client";
function TextEditor() {
  const { quill, quillRef, Quill } = useQuill({ modules: { counter: true } });

  useEffect(() => {
    const socket = io("http://localhost:3001");
    return () => {
      // console.log("connected to socket . io");
      socket.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("");
    }
  }, [quill]);

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  const counterRef = React.useRef();

  if (Quill && !quill) {
    // For execute this line only once.
    Quill.register("modules/counter", function (quill, options) {
      quill.on("text-change", function () {
        const text = quill.getText();

        counterRef.current.innerText = text.split(/\s+/).length;
      });
    });
  }

  return (
    <div className="textEditor">
      <div className="cls" style={{ height: "100%" }}>
        <div ref={quillRef} />
        <div ref={counterRef} />
      </div>
    </div>
  );
}

export default TextEditor;
