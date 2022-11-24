import axios from "axios";
import _routes from "./service-routes";


const service = {
  setPageTitle: (component) => document.title = `BrickX - ${component}`,

  browserHeight: () => window.innerHeight - 100,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),

  doLogin: async (postBody) => {
    const res = await axios.post(_routes.login, postBody)
      .then(err => console.log('value of server error', err))
    return res.data
  }
}

export default service;