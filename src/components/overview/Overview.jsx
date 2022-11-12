import React from "react";
import service from "services/service";
import s from "./css/Overview.module.sass";

function Overview() {
  service.setPageTitle('Overview')
  return (
    <div className={s.main_container}>Overview</div>
  );
}

export default Overview;
