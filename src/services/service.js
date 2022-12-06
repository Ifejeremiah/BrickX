import axios from "axios";
import _routes from "./service-routes";

const token = localStorage.getItem("auth-token");

axios.interceptors.request.use(
  (config) => {
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const service = {
  setPageTitle: (component) => document.title = `BrickX - ${component}`,

  browserHeight: () => window.innerHeight - 100,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),

  getPayload: () => {
    if (token !== null) {
      const { role, user_id } = JSON.parse(atob(token.split(".")[1]));
      return { role, user_id };
    }
  },

  getCurrentContractorUserData: async () => {
    const res = await axios.get(`${_routes.users}/contractor/my-profile`)
    return res.data
  },

  getCurrentWorkerUserData: async () => {
    const res = await axios.get(`${_routes.users}/worker/my-profile`)
    return res.data
  },

  createProject: async (postBody) => {
    const res = await axios.post(_routes.projects, postBody)
    return res.data
  },

  getAllProjects: async () => {
    const res = await axios.get(_routes.projects)
    return res.data
  },

  getProjectById: async (projectId) => {
    const res = await axios.get(`${_routes.projects}/${projectId}`)
    return res.data
  },

}

export default service;