import Button from "components/button/Button";
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

      <div className="section-b">
        <div className="mb-5">
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

        <div className="d-flex align-items-center gap-4">
          <div>
            <Button
              type="primary"
              text="View all applicants"
              modal={true}
              modalHeaderTitle="All Project Applicants"
              modalTarget="view-all-applicants"
              modalContext={
                <div className="con-applicant">
                  <Link to="/my-profile" data-bs-dismiss="modal">
                    <div className="applicant-card">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/my-profile" data-bs-dismiss="modal">
                    <div className="applicant-card">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>
                </div>
              }
              modalFooterBtn={
                <>
                  <button data-bs-dismiss="modal" className="primary-btn">
                    Done
                  </button>
                </>
              }
            />
          </div>

          <div>
            <Button
              type="primary"
              text="View all workers"
              modal={true}
              modalHeaderTitle="All Active Workers on Project"
              modalTarget="view-all-workers"
              modalContext={
                <div className="con-applicant">
                  <Link to="/my-profile" data-bs-dismiss="modal">
                    <div className="applicant-card">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/my-profile" data-bs-dismiss="modal">
                    <div className="applicant-card">
                      <div className="con-img">
                        <img
                          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt=""
                        />
                      </div>
                      <div className="con-text">
                        <h3 className="name">John Doe</h3>
                        <p className="title">Manager</p>
                      </div>
                    </div>
                  </Link>
                </div>
              }
              modalFooterBtn={
                <>
                  <button data-bs-dismiss="modal" className="primary-btn">
                    Done
                  </button>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectData;
