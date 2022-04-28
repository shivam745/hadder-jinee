import React, { useRef, useState } from "react";
import "./index.css"
export const SerialKey = () => {
  const inputAccess = useRef("");
  const [text, setText] = useState([]);

  const changes = (event) => {
    console.log(event.target.value.length);

    setText(event.target.value);

    let ele = event.target.value.split("-").join(""); // Remove dash (-) if mistakenly entered.

    if (text.length === 3) {
      inputAccess.current.value = ele.match(/.{1,3}/g).join("-");
    } else if (text.length === 7) {
      inputAccess.current.value = ele.match(/.{1,3}/g).join("-");
    }
  };
  // console.log(window.event.inputType);

  // if (window.event.inputType === "insertText") {
  //   if (event.target.value.length === 3) {
  //     inputAccess.current.value = event.target.value + "-";
  //     // setText(event.target.value);
  //   } else if (event.target.value.length === 7) {
  //     inputAccess.current.value = event.target.value + "-";
  //   }
  // }
  // inputAccess.current.value = commafy(text);
  // console.log(inputAccess.current.value);
  // function commafy(num) {
  //   let ele = document.getElementById(element.id);
  // }
  // console.log(text);

  return (
    <div className="input-field" to="/SerialKey">
      <h1>
        <input
          type={"text"}
          placeholder="enter key.."
          ref={inputAccess}
          className="medium"
          onChange={changes}
          maxLength="12"
          style={{ textAlign: "center" }}
        ></input>
      </h1>
    </div>
  );
};
