const baseUrl = '/api'
const authRoute = '/api/auth'

const _routes = {
  login: `${authRoute}/login`,
  register: `${authRoute}/register`,
  projects: `${baseUrl}/projects`,
  users: `${baseUrl}/users/my-profile`,
}

export default _routes;