import React from "react";
import { Route, Routes } from "react-router-dom";
import { SerialKey } from "../serialKey";
import { Login } from "../login";
import { Home } from "../home";
import { Count } from "../counter";
import { Jinee } from "../Jinee";
import NavBar from "../navbar";

export const Template = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SerialKey" element={<SerialKey />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Count" element={<Count />} />
        <Route exact path="/Jinee" element={<Jinee />} />
      </Routes>
    </>
  );
};
