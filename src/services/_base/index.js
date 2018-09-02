import axios from 'axios'

export default class BaseService {
  localStorageAuthLocation = 'auth'

  constructor(baseUrl) {
    this.baseUrl = `http://localhost:3000/arc/${baseUrl}`
  }

  get(query) {
    const config = this.getHeaders()
    return axios.get(this.baseUrl, query, config)
  }

  post(object) {
    const config = this.getHeaders()
    return axios.post(this.baseUrl, object, config)
  }

  put(object) {
    const config = this.getHeaders()
    return axios.put(this.baseUrl, object, config)
  }

  delete(id) {
    const config = this.getHeaders()
    return axios.delete(`${this.baseUrl}/${id}`, config)
  }

  save(object) {
    const config = this.getHeaders()
    const saveAction = object.id
      ? axios.put(`${this.baseUrl}/${object.id}`, object, config)
      : axios.post(this.baseUrl, object, config)

    return saveAction
  }

  getById(id) {
    const config = this.getHeaders()
    return axios.get(`${this.baseUrl}/${id}`, config)
  }

  rawGet(url, query) {
    const config = this.getHeaders()
    return axios.get(url, query, config)
  }

  getHeaders() {
    const username = JSON.parse(
      localStorage.getItem(this.localStorageAuthLocation),
    )
    if (username) {
      return { headers: { Authorization: username } }
    }
  }
}
