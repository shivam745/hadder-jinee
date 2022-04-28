import { React, useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { add, dec } from "../../action/count/Action.js";

export const Count = () => {
  const [count, setCount] = useState("");
  const stateResult = useSelector((state) => state.numCount);
  const dispatch = useDispatch();

  return (
    <div className="ui container large d-flex">
      <button
        className="ui negative button"
        onClick={() => dispatch(dec())}
      >-</button>
      <input
        placeholder="enter only number"
        className="ui inverted focus input "
        type="text"
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
        maxLength="14"
        value={stateResult}
      />
      <button className="ui positive button" onClick={() => dispatch(add())}>
        +
      </button>
    </div>
  );
};
