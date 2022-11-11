import React from "react";
import { NavLink } from "react-router-dom";
import service from "services/service";
import s from "./css/Sidebar.module.sass";

function Sidebar({ routes }) {
  return (
    <div className={`${s.main_sidebar}`} style={{ height: service.browserHeight() }}>
      <div className="d-flex- align-items-center justify-content-center">
        <ul className="pt-5">
          {routes.map((route, key) => (
            <NavLink
              key={key}
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
