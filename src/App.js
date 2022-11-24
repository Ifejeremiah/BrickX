import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Template from "components/template/Template";
import Overview from "components/overview/Overview";
import Project from "components/project/Project-dashboard";
import Profile from "components/profile/Profile";
import Homepage from "components/homepage/Homepage";
import Explore from "components/explore/Explore";
import ProjectDetail from "components/project-details/Project-detail";

import s from "./utils/scss/App.module.sass";
import Login from "components/login/Login";
import Register from "components/register/Register";
import ProjectData from "components/project-data/Project-data";
import Requests from "components/requests/Requests";

function App() {

  // const [project, setProjects] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const token = localStorage.getItem("auth-token");

  function setAuthEnv(token) {
    localStorage.setItem("auth-token", token);
    setIsAuthenticated(true)
  }

  function doLogout() {
    localStorage.removeItem('auth-token')
  }

  useEffect(() => {
    if (token === null) setIsAuthenticated(false)
  }, [token])

  // useEffect(() => {
  //   (async () => {
  //     setProjects(await fetchProjects())
  //   })()
  // }, [])

  // async function fetchProjects() {
  //   const res = await fetch('/departments')
  //   const data = await res.json()
  //   return data
  // }

  // console.log('Result of projects', project)

  return (
    <Router>
      <div className={`${s.main_container}`}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Template Children routes */}
          <Route element={
            !!token && isAuthenticated ? (
              <Template logout={doLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }>
            <Route path="/overview" element={<Overview />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/id" element={<ProjectData />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/id" element={<ProjectDetail />} />
          </Route>

          <Route path='/login' element={<Login authStatus={setAuthEnv} />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' component={<Navigate to="/overview" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
