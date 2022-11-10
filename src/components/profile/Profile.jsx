import { useState } from "react";

import "./css/Profile.sass";
import s from "./css/Profile.module.sass";
import Button from "components/button/Button";
import { useFormik } from "formik";

document.title = `BrickX - My Profile`;

function Profile() {
  const [user, setUser] = useState({
    firstName: "Zainab",
    lastName: "Sanni",
    email: "zainabsanni@gmail.com",
    type: "contractor",
    job: "Cost Manager",
    bio: "Welcome! Hey be nice.",
    gender: "Female",
    phone: "+2348025925416",
  });

  const formik = useFormik({
    initialValues: user,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      setUser(() => ({
        ...values,
      }));

      console.log("state value", JSON.stringify(user, null, 2));
    },
  });

  return (
    <div className="container">
      <div className={s.profile}>
        <div className="con-header d-lg-flex align-items-center justify-content-between mb-4">
          <div className="d-sm-flex align-items-center gap-3 gap-lg-4">
            <div className={s.user_img}>
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>

            <div className={s.user_data}>
              <div className={s.user_name}>
                {user.firstName} {user.lastName}
              </div>
              <div className={s.user_email}>{user.email}</div>
              <div
                className={s.user_type}
                title="Contractor User Type - Contractor creates projects and assign jobs to workers."
              >
                {user.type}
              </div>
            </div>
          </div>
          <div className="edit-user-btn py-3">
            <Button
              text="Edit Your Profile"
              modal
              modalTarget="user-edit-profile"
              modalHeaderTitle="Edit Profile"
              modalContext={
                <>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <input
                      className="form-control"
                      id="bio"
                      name="bio"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.bio}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="job" className="form-label">
                      Job description
                    </label>
                    <input
                      className="form-control"
                      id="job"
                      name="job"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.job}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      name="gender"
                      id="gender"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <option defaultValue="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                </>
              }
              modalFooterBtn={
                <>
                  <>
                    <button data-bs-dismiss="modal" className="secondary-btn">
                      Close
                    </button>

                    <button
                      type="submit"
                      className="primary-btn"
                      onClick={formik.handleSubmit}
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </>
                </>
              }
            />
          </div>
        </div>

        <div className="con-body">
          <div className="mt">
            <ul className="list-group">
              <li className="list-group-item">
                <b>Job description</b>
                <p>{user.job}</p>
              </li>

              <li className="list-group-item">
                <b>Bio:</b>
                <p>{user.bio}</p>
              </li>

              <li className="list-group-item">
                <b>Gender:</b>
                <p>{user.gender}</p>
              </li>

              <li className="list-group-item">
                <b>Phone:</b>
                <p>{user.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
