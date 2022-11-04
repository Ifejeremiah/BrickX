import { Link } from "react-router-dom";
import s from "./css/Header.module.sass";

function Header() {
  const username = "Ife Jeremiah";

  return (
    <div className={`${s.header_container} mb-2`}>
      <div className="d-flex align-items-center justify-content-between px-lg-5 px-4 py-3">
        <div className="con-left">
          <div className="left">
            <div className={`${s.con_sidebar_btn} d-flex`}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>

        <div className="con-middle">
          <div className="middle">
            <div className={s.logo}>BrickX</div>
          </div>
        </div>

        <div className="con-right">
          <div className="right">
            <div
              className={`${s.con_user_btn} d-flex gap-3 pointer align-items-center`}
            >
              <div className="user-profile-round d-none d-lg-flex gap-3 align-items-center">
                {username ? <p>{username}</p> : ""}
                <i className="fa-regular fa-user"></i>
              </div>

              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                ></div>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/overview">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
