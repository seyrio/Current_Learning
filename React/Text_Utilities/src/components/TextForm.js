import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleRemoveExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            rows="8"
            className="form-control"
            id="textFromArea"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((t) => {
              return t !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(/\s+/).filter((t) => {
              return t !== "";
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
