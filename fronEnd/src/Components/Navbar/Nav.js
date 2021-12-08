import React from "react";
// import { NavLink,Link } from 'react-router-dom'
import { Link } from "react-router-dom";

import "./n.css";

export default function N({ token, setToken }) {
  return (
    <div className="topnav">
      {token ? (
        <ul>
          <li>
            <Link
              to="/login"
              onClick={() => {
                setToken("");
                localStorage.setItem("token", JSON.stringify(""));
              }}
            >
              تسجيل خروج
            </Link>

            <Link to="/Cats">قطط للتبني </Link>
            <Link to="/AddCats">إضافة قط </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link
              className="link"
              to="/login"
              onClick={() => {
                setToken();
              }}
            >
              {" "}
              تسجيل دخول{" "}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
