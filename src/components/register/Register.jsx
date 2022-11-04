import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Register.sass";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [user1, setUser1] = useState(false);
  const [user2, setUser2] = useState(false);

  const [message, setMsg] = useState("");

  document.title = "BrickX - Create new account";

  const navigate = useNavigate();

  const check = user1 || user2;

  function validate(callback) {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !password2 ||
      !check
    ) {
      setMsg("Fill in all fields");
    } else if (password !== password2) {
      setMsg("Passwords don't match");
    } else callback();
  }

  function submit(evt) {
    evt.preventDefault();
    validate(() => navigate({ pathname: "/login", search: "?__lgn=vlan" }));
  }

  return (
    <div className="container-register">
      <header className="mb-4">
        <h3 className="bold">BrickX.</h3>
        <p className="text-ash-color">Create a new account</p>
      </header>

      {message ? <p className="msg">{message}</p> : ""}

      <form className="py-4" onSubmit={submit}>
        <div className="control-form mb-4">
          <label htmlFor="first-name">First Name:</label> <br />
          <input
            type="text"
            id="first-name"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setMsg("");
            }}
          />
        </div>

        <div className="control-form mb-4">
          <label htmlFor="last-name">Last Name:</label> <br />
          <input
            type="text"
            id="last-name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setMsg("");
            }}
          />
        </div>

        <div className="control-form mb-4">
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMsg("");
            }}
          />
        </div>

        <div className="control-form mb-4">
          <label htmlFor="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setMsg("");
            }}
          />
        </div>

        <div className="control-form mb-4">
          <label htmlFor="password2">Confirm Password:</label> <br />
          <input
            type="password"
            id="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
              setMsg("");
            }}
          />
        </div>

        <div className="control-check">
          <p className="label">User Type:</p>

          <div className="d-flex align-items-center gap-4 my-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="user1"
                checked={user1}
                value={user1}
                onChange={(e) => {
                  setUser1(e.currentTarget.checked);
                  setMsg("");
                }}
                disabled={user2}
              />
              <label className="form-check-label" htmlFor="user1">
                Contractor
              </label>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="user2"
                checked={user2}
                value={user2}
                onChange={(e) => {
                  setUser2(e.currentTarget.checked);
                  setMsg("");
                }}
                disabled={user1}
              />
              <label className="form-check-label" htmlFor="user2">
                Worker
              </label>
            </div>
          </div>
        </div>

        <div className="control-form">
          <input
            type="submit"
            value={"Register"}
            className="form-submit primary-btn"
          />
        </div>
      </form>
      <p>
        Already have an account? &nbsp;
        <Link className="link" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default Register;
