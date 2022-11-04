import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "components/login/Login";
import Register from "components/register/Register";
import Template from "components/template/Template";
import Overview from "components/overview/Overview";
import Project from "components/project/Project";

import s from './utils/scss/App.module.sass'
import Profile from "components/profile/Profile";

function App() {

  const $routes = [
    {
      id: 1,
      path: '/login',
      component: <Login />
    },
    {
      id: 2,
      path: '/register',
      component: <Register />
    },
    {
      id: 3,
      path: '*',
      component: <Navigate to="/overview" replace />
    }
  ]

  return (
    <Router>
      <div className={`${s.main_container}`}>
        <Routes>
          {/* Template Children routes */}
          <Route element={<Template />} >
            <Route path="/overview" element={<Overview />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/my-profile" element={<Profile />} />
          </Route>

          {$routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router >
  );
}

export default App;