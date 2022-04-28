import React, { useState } from "react";
import "./index.css";
import { saveCreditials } from "../../Slice/slice";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const submitDetails = useSelector((state) => state.login.initialState);
  const dispatch = useDispatch();
  // console.log(submitDetails);
  console.log(userDetails);
  const onFormSubmit = (e) => {
    e.preventDefault();
    // dispatch(saveCreditials({ userName, password }))
    setUserDetails({ userName, password });
  };

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="User Id"
          onChange={(e) => {
            e.preventDefault();
            setUserName(e.target.value);
          }}
          type="text"
        />
        <input
          placeholder="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button id="sub">
          submit
        </button>
      </form>
      <div>
        <h2>
          <ul>
            <li>Status : {submitDetails}</li>
          </ul>
        </h2>
      </div>
    </div>
  );
};
