import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="container-login d-flex flex-column flex-lg-row justify-content-center">
      <div className="d-none d-lg-block col-lg-7">
        <div className="img">
          <img
            src="https://plus.unsplash.com/premium_photo-1663054710563-598f084bdd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-5">
        <div className="con-right d-flex align-items-center justify-content-center">
          <div className="right px-3 px-lg-0">
            <header className="mb-3">
              <h3 className="bold">Welcome Back !</h3>
              <p className="text-ash-color">Sign in to continue</p>
            </header>

            <form className="py-4">
              <div className="control-form mb-3">
                <label htmlFor="username">Username:</label> <br />
                <input
                  type="text"
                  name=""
                  id="username"
                  placeholder="Enter username"
                />
              </div>

              <div className="control-form mb-4">
                <label htmlFor="password">Password:</label> <br />
                <input
                  type="text"
                  name=""
                  id="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="control-form">
                <input type="submit" value={"Login"} className="form-submit" />
              </div>
            </form>
            <p>
              Don't have an account? &nbsp;
              <Link className="link" to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
