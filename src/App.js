import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "components/login/Login";
import Register from "components/register/Register";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Link to="/login">
                  <div className="primary-btn me-4">Login</div>
                </Link>
                <Link to="/register">
                  <div className="primary-btn">Register</div>
                </Link>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
