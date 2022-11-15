import Previous from "components/previous/Previous";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import service from "services/service";
import "./css/Project-data.sass";

function ProjectData() {
  const [state, setState] = useState("open");

  service.setPageTitle("Trump Tower");

  function handleState() {
    if (state === "open") {
      setState("closed");
    } else {
      setState("open");
    }
  }

  return (
    <div id="Project-data_Main_Container">
      <div className="section-a d-flex align-items-center justify-content-between mb-5">
        <div className="con-previous">
          <Previous route="/projects" />
        </div>
        <div className="con-edit">
          <button className="primary-btn">Edit Project</button>
        </div>
      </div>

      <div className="section-b row">
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <div>
            <div className="details-card">
              <div className="header d-flex align-items-center justify-content-between mb-3">
                <h3 className="title">Trump Tower</h3>
                <div className={`status ${state === "open" ? "active" : ""}`}>
                  {state}
                </div>
              </div>

              <div className="con-budget flex">
                <h3>Budget:</h3>
                <p>3000</p>
              </div>

              <div className="con-date flex">
                <h3>Date:</h3>
                <p>August 20, 2022</p>
              </div>

              <div className="con-duration flex">
                <h3>Duration:</h3>
                <p>3 Months</p>
              </div>

              <div className="con-apply flex">
                <h3>No. of Applicants:</h3>
                <p>30</p>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-5">
                <i></i>
                <div
                  className={`con-action ${state === "open" ? "active" : ""}`}
                  onClick={handleState}
                >
                  {state === "open" ? "Close Project" : "Open Project"}
                  <i className="ms-2 fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="section-c">
            <div>
              <div className="header">All Applications Requests</div>
              <div className="con-apply">
                <Link to="/">
                  <div className="apply-card">
                    <h3>3</h3>
                    <p>Managers</p>
                  </div>
                </Link>

                <Link to="/">
                  <div className="apply-card">
                    <h3>3</h3>
                    <p>Managers</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectData;
