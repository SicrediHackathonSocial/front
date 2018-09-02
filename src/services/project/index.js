import BaseService from '../_base'
import axios from 'axios'

export class ProjectService extends BaseService {
  constructor() {
    super('project')
  }

  saveGoals(idProject, goals) {
    const obj = {
      idProject,
      goals
    }

    axios.post(`${super.baseUrl}/goals`, obj)
  }
}