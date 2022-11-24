import axios from "axios";
import _routes from "./service-routes";

axios.interceptors.response.use(
  res => res,
  err => {
    const log = {
      msg: 'interceptor => server error',
      'statusText': err.response.statusText,
      'statusCode': err.response.status
    }
    return Promise.reject(log)
  }
)


const service = {
  setPageTitle: (component) => document.title = `BrickX - ${component}`,

  browserHeight: () => window.innerHeight - 100,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),

  doLogin: async (postBody) => {
    const res = await axios.post(_routes.login, postBody)
    return res.data
  }
}

export default service;