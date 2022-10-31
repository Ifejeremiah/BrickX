import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "components/login/Login";
import Register from "components/register/Register";

function App() {
  return (
    <Router>
      <div className="main-container">

        <Routes>
          <Route path="/" exact element={<>Home page</>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={< Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
