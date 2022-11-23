import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import routes from "utils/routes";

import service from "services/service";
import s from "./css/Template.module.sass";
import "./css/Template.sass";
import { useState } from "react";

function Template({ logout }) {
  const [toggle, setToggle] = useState("d-none");

  function changeToggle() {
    setToggle("d-block");
  };

  return (
    <div className="template-container p-2" id="Template_Main_Container">
      <Header logout={logout} />

      <div className="d-flex align-items-start">
        <div className={`${toggle} col-8 col-lg-2 d-lg-block`}>
          <Sidebar routes={routes} />
        </div>

        <div className="col-12 col-lg-10">
          <div
            className={`${s.overview_container} d-flex align-items-center justify-content-between`}
            style={{ height: service.browserHeight() }}
          >
            <i></i>
            <div className={s.main_container}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
