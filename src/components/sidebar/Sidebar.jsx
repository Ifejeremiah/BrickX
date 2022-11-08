import React from "react";
import { NavLink } from "react-router-dom";
import s from "./css/Sidebar.module.sass";

function Sidebar({ routes }) {
  return (
    <div className={`${s.main_sidebar}`}>
      <div className="d-flex- align-items-center justify-content-center">
        <ul className="pt-5">
          {routes.map((route) => (
            <NavLink
              key={route.id}
              className={({ isActive }) => (isActive ? `${s.active}` : "")}
              to={route.path}
            >
              <li className="mb-4">{route.context}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
