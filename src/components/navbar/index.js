import { useLocation } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import("./index.css");

const NavBar = () => {
  const location = useLocation();
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    }, 199);
  }, [randomColor]);

  return (
    <div
      className="ui attached pointing tabular menu"
      style={{
        justifyContent: "flex-start",
        padding: "25px",
        display: "flex",
      }}
    >
      <div
        className={`home olive item ${
          location.pathname === "/" ? "active" : ""
        } `}
      >
        <Link className="link" style={{ color: "crimson" }} to="/">
          HOME
        </Link>
      </div>

      <div
        className={`auth olive item ${
          location.pathname === "/SerialKey" ? "active" : ""
        }`}
      >
        <Link className="link" to="/SerialKey">
          AUTHENTICATION
        </Link>
      </div>
      <div
        className={`count olive item ${
          location.pathname === "/Count" ? "active" : ""
        }`}
      >
        <Link className="link" to="/Count">
          COUNTER
        </Link>
      </div>
      <div
        className={`jinee olive item ${
          location.pathname === "/Jinee" ? "active" : ""
        }`}
      >
        <Link className="link" style={{ color: `#${randomColor}` }} to="/Jinee">
          JINEE
        </Link>
      </div>
      <div
        className={`login olive  item ${
          location.pathname === "/Login" ? "active" : ""
        }`}
        style={{ marginLeft: " auto " }}
      >
        <Link className="link" to="/Login">
          LOGIN
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
