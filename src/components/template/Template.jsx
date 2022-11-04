import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import routes from "utils/routes";

import s from "./css/Template.module.sass";

function Template() {
  return (
    <div className="template-container p-2">
      <Header />

      <div className="d-flex align-items-start">
        <div className="col-2">
          <Sidebar routes={routes} />
        </div>

        <div className="col-10">
          <div
            className={`${s.overview_container} d-flex align-items-center justify-content-between`}
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
