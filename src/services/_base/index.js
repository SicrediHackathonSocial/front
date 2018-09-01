import axios from "axios";

export default class BaseService {
  constructor(baseUrl) {
    this.baseUrl = `http://localhost:3000/${baseUrl}`
  }

  get(query) {
    return axios.get(this.baseUrl, query)
  }

  post(object) {
    return axios.post(this.baseUrl, object)
  }
  
  put(object) {
    return axios.put(this.baseUrl, object)
  }

  delete(id) {
    return axios.delete(`${this.baseUrl}/${id}`)
  }

  save(object) {
    const saveAction = object.id
      ? axios.put(`${this.baseUrl}/${object.id}`, object)
      : axios.post(this.baseUrl, object);

    return saveAction
  }

  getById(id) {
    return axios.get(`${this.baseUrl}/${id}`)
  }

  rawGet(url, query) {
    return axios.get(url, query)
  }
}
