import { useFormik } from "formik";

import Button from "components/button/Button";
import { projectSchema, projectData } from "schema/projectValidate";

import s from "./css/Project.module.sass";
import "./css/Project.sass";
import { useState } from "react";

document.title = `BrickX - Projects`;

function Project() {
  const [projects, setProject] = useState([]);

  // const [check, setCheck] = useState({
  //   inspector: false,
  //   flooringInstaller: false,
  //   surveyor: false,
  //   brickMason: false,
  //   ironWorker: false,
  //   craneOperator: false,
  //   safetyManager: false,
  //   costEstimator: false,
  //   manager: false,
  // });

  const formik = useFormik({
    initialValues: projectData,
    validationSchema: projectSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setProject([values, ...projects]);
      formik.resetForm();
    },
  });

  return (
    <div className="main-container">
      <div className="header d-flex align-items-center justify-content-between px-lg-4">
        <div className="title">
          <h2>Projects</h2>
        </div>

        <div className="header-btn">
          <Button
            type="primary"
            text="New Project"
            modal={true}
            modalHeaderTitle="Create New Project"
            modalTarget="new-project-create"
            modalContext={
              <form className="my-4">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />

                  <p className="invalid-data">
                    {formik.errors.title && formik.touched.title
                      ? formik.errors.title
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Duration
                  </label>
                  <select
                    className="form-select"
                    name="duration"
                    id="duration"
                    onChange={formik.handleChange}
                    value={formik.values.duration}
                  >
                    <option defaultValue="">Select project duration</option>
                    <option>2 Weeks</option>
                    <option value="1 month">1 Month</option>
                    <option value="2 months">2 Months</option>
                    <option value="3 months">3 Months </option>
                    <option value="4 months">6 Months </option>
                  </select>
                  <p className="invalid-data">
                    {formik.errors.duration && formik.touched.duration
                      ? formik.errors.duration
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Budget
                  </label>
                  <input
                    className="form-control"
                    id="budget"
                    name="budget"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                  />
                  <p className="invalid-data">
                    {formik.errors.budget && formik.touched.budget
                      ? formik.errors.budget
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="start_date" className="form-label">
                    Start Date
                  </label>
                  <input
                    className="form-control"
                    id="start_date"
                    name="start_date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.start_date}
                  />
                  <p className="invalid-data">
                    {formik.errors.start_date && formik.touched.start_date
                      ? formik.errors.start_date
                      : null}
                  </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="end_date" className="form-label">
                    End Date
                  </label>
                  <input
                    className="form-control"
                    id="end_date"
                    name="end_date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.end_date}
                  />
                  <p className="invalid-data">
                    {formik.errors.end_date && formik.touched.end_date
                      ? formik.errors.end_date
                      : null}
                  </p>
                </div>

                <h5 className="my-4">Select workers you need</h5>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inspector"
                      name="workers.inspector.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.inspector.select}
                    />
                    <label className="form-check-label" htmlFor="inspector">
                      Inspector
                    </label>
                  </div>

                  {formik.values.workers.inspector.select && (
                    <div>
                      <div>
                        <label htmlFor="no-inspectors" className="form-label">
                          Number of Inspectors
                        </label>
                        <input
                          id="no-inspectors"
                          name="workers.inspector.number"
                          type="number"
                          className="form-control"
                          onChange={formik.handleChange}
                          value={formik.values.workers.inspector.number}
                        />
                      </div>
                      <p className="invalid-data">Enter number of Inspectors</p>
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flooringInstaller"
                      name="workers.flooringInstaller.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.flooringInstaller.select}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flooringInstaller"
                    >
                      Flooring Installer
                    </label>
                  </div>

                  {formik.values.workers.flooringInstaller.select && (
                    <div>
                      <label
                        htmlFor="no-flooringInstaller"
                        className="form-label"
                      >
                        Number of Flooring Installer
                      </label>
                      <input
                        id="no-flooringInstaller"
                        name="workers.flooringInstaller.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.flooringInstaller.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="surveyor"
                      name="workers.surveyor.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.surveyor.select}
                    />
                    <label className="form-check-label" htmlFor="surveyor">
                      Surveyor
                    </label>
                  </div>

                  {formik.values.workers.surveyor.select && (
                    <div>
                      <label htmlFor="no-surveyor" className="form-label">
                        Number of Surveyors
                      </label>
                      <input
                        id="no-surveyor"
                        name="workers.surveyor.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.surveyor.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="brickMason"
                      name="workers.brickMason.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.brickMason.select}
                    />
                    <label className="form-check-label" htmlFor="brickMason">
                      Brick Mason
                    </label>
                  </div>

                  {formik.values.workers.brickMason.select && (
                    <div>
                      <label htmlFor="no-brickMason" className="form-label">
                        Number of Brick Manson
                      </label>
                      <input
                        id="no-brickMason"
                        name="workers.brickMason.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.brickMason.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ironWorker"
                      name="workers.ironWorker.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.ironWorker.select}
                    />
                    <label className="form-check-label" htmlFor="ironWorker">
                      Iron Worker
                    </label>
                  </div>

                  {formik.values.workers.ironWorker.select && (
                    <div>
                      <label htmlFor="no-ironWorker" className="form-label">
                        Number of Iron Workers
                      </label>
                      <input
                        id="no-ironWorker"
                        name="workers.ironWorker.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.ironWorker.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="craneOperator"
                      name="workers.craneOperator.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.craneOperator.select}
                    />
                    <label className="form-check-label" htmlFor="craneOperator">
                      Crane Operator
                    </label>
                  </div>

                  {formik.values.workers.craneOperator.select && (
                    <div>
                      <label htmlFor="no-craneOperator" className="form-label">
                        Number of Crane Operators
                      </label>
                      <input
                        id="no-craneOperator"
                        name="workers.craneOperator.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.craneOperator.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="safetyManager"
                      name="workers.safetyManager.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.safetyManager.select}
                    />
                    <label className="form-check-label" htmlFor="safetyManager">
                      Safety Manager
                    </label>
                  </div>

                  {formik.values.workers.safetyManager.select && (
                    <div>
                      <label htmlFor="no-safetyManager" className="form-label">
                        Number of Safety Managers
                      </label>
                      <input
                        id="no-safetyManager"
                        name="workers.safetyManager.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.safetyManager.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="costEstimator"
                      name="workers.costEstimator.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.costEstimator.select}
                    />
                    <label className="form-check-label" htmlFor="costEstimator">
                      Cost Estimator
                    </label>
                  </div>

                  {formik.values.workers.costEstimator.select && (
                    <div>
                      <label htmlFor="no-costEstimator" className="form-label">
                        Number of Cost Estimators
                      </label>
                      <input
                        id="no-costEstimator"
                        name="workers.costEstimator.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.costEstimator.number}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="manager"
                      name="workers.manager.select"
                      onChange={formik.handleChange}
                      checked={formik.values.workers.manager.select}
                    />
                    <label className="form-check-label" htmlFor="manager">
                      Manager
                    </label>
                  </div>

                  {formik.values.workers.manager.select && (
                    <div>
                      <label htmlFor="no-manager" className="form-label">
                        Number of Managers
                      </label>
                      <input
                        id="no-manager"
                        name="workers.manager.number"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.workers.manager.number}
                      />
                    </div>
                  )}
                </div>
              </form>
            }
            modalFooterBtn={
              <>
                <button
                  data-bs-dismiss="modal"
                  className="secondary-btn"
                  onClick={formik.resetForm}
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="primary-btn"
                  onClick={formik.handleSubmit}
                  data-bs-dismiss={
                    formik.isValid && formik.dirty ? "modal" : null
                  }
                >
                  Next
                </button>
              </>
            }
          />
        </div>
      </div>

      <div className="body pt-4 px-lg-4">
        {projects.length > 0 ? (
          <div className={`${s.project_list} table-responsive`}>
            <table className="table caption-top table-hover table-striped">
              <caption>All Projects</caption>
              <thead>
                <tr>
                  <th scope="col">Project Title</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, key) => (
                  <tr key={key}>
                    <td>{project.title}</td>
                    <td>{project.duration}</td>
                    <td>{project.start_date}</td>
                    <td>{project.end_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={s.con_no_data}>
            <div>
              No Projects to show. &nbsp;
              <span
                data-bs-toggle="modal"
                data-bs-target="#new-project-create"
                className={s.highlight}
              >
                Create New Project
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
