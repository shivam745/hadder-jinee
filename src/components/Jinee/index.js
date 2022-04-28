import React, { useEffect } from "react";
import { useState, useRef } from "react";
import videoBg from "../../assets/skullred.mp4";
import "../Jinee/index.css";

export const Jinee = () => {
  const [words, setWords] = useState("");
  const request = "jinee please answer my following question".split("");
  const val = useRef();

  useEffect(() => {
    val.current.focus();
  }, []);

  let arr = "";
  let message = "";

  const answer = (e) => {
    if (window.event.inputType === "insertText") {
      arr += e?.nativeEvent?.data;
      message += request[arr.length - 1];
      console.log("arr", arr, "mesg", message);
      if ("." === arr.at(arr[0])) {
        val.current.value = message;
      }
    } else if (window.event.inputType === "deleteContentBackward") {
      arr = arr.split("").slice(0, -1).join("");
      message = message.split("").slice(0, -1).join("");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (arr.includes(".")) {
      setWords(arr.split(".").slice("."));
    } else {
      setWords("your petition wasn't good.");
    }
  };

  return (
    <>
      <video src={videoBg} autoPlay muted loop />
      <div style={{ width: "51%" }} className="ui container overlay">
        <h1>
          <legend>Request Jinee</legend>
        </h1>
        <form onSubmit={submit}>
          <input
            placeholder="Petition"
            onChange={answer}
            ref={val}
            className="inputBox "
          />
          <br />
          <h1>
            <legend style={{ marginTop: "50px" }}>Ask your question ?</legend>
          </h1>
          <input placeholder="Question" className="inputBox large " />
          <button>submit</button>
        </form>
        <div className="ui container Large">
          <h2>
            Answer :-<div>{words}</div>
          </h2>
        </div>
      </div>
    </>
  );
};
