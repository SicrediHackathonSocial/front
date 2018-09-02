import BaseService from '../_base'
import axios from "axios"

export class GoalService extends BaseService {
  constructor() {
    super('goals')
  }

  inserirValor(inserirValorDto) {
    this.getHeaders()
    return axios.post(this.baseUrl + '/value', inserirValorDto)
  }
}