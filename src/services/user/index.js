import BaseService from '../_base'
import axios from "axios"

export class UserService extends BaseService {
  constructor() {
    super('user')
  }

  login(loginDto) {
    const promise = axios.post(this.baseUrl + '/login', loginDto)
    promise.then(response => {
      localStorage.setItem(this.localStorageAuthLocation, response.username)
    })

    return promise
  }

  cadastroUser(cadastroDto) {
    const promise = this.post(cadastroDto)
    promise.then(response => {
      localStorage.setItem(this.localStorageAuthLocation, response.username)
    })

    return promise
  }
}