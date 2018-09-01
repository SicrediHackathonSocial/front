import BaseService from '../_base'

export class GoalService extends BaseService {
  constructor() {
    super('goal')
  }

  inserirValor(inserirValorDto) {
    this.getHeaders()
    return axios.post(this.baseUrl + '/value', inserirValorDto)
  }
}