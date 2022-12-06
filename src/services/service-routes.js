const baseUrl = '/api'
const authRoute = '/api/auth'

const _routes = {
  login: `${authRoute}`,
  register: `${authRoute}/register`,
  projects: `${baseUrl}/contractors/0/projects`,
  users: `${baseUrl}/users`,
}

export default _routes;