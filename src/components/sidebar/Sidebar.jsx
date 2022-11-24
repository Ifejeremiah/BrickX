import React from "react";
import { Link, NavLink } from "react-router-dom";
import service from "services/service";
import s from "./css/Sidebar.module.sass";

function Sidebar({ routes, doToggle, logout }) {
  return (
    <div
      className={`${s.main_sidebar}`}
      style={{ height: service.browserHeight() }}
    >
      <div className="d-flex- align-items-center justify-content-center">
        <ul className="pt-5">
          {routes.map((route, key) => (
            <NavLink
              key={key}
              className={({ isActive }) => (isActive ? `${s.active}` : "")}
              to={route.path}
              onClick={doToggle}
            >
              <li className="mb-4">{route.context}</li>
            </NavLink>
          ))}
        </ul>

        {service.isMobile ? (
          <>
            <li className={`${s.last_sidebar_item}`}>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Sidebar;
