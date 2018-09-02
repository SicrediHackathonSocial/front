import BaseService from '../_base'
import axios from "axios"

export class ProjectService extends BaseService {
  constructor() {
    super('projects')
  }

  membership(idProject, username) {
    const config = this.getHeaders()
    return axios.post(`${this.baseUrl}/membership/${idProject}/${username}`, {}, config)
  }
}