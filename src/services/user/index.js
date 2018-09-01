import BaseService from '../_base'
import axios from "axios"

export class UserService extends BaseService {
  constructor() {
    super('user')
  }

  login(loginDto) {
    const promise = axios.post(this.baseUrl, loginDto)
    promise.then(token => {
      localStorage.setItem(this.localStorageAuthLocation, token)
    })

    return promise
  }
}