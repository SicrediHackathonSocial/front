import BaseService from '../_base'
import axios from "axios"

const localStorageUserLocation = 'userLogado'

export class UserService extends BaseService {
  constructor() {
    super('users')
  }

  login(userDto) {
    const promise = axios.post(this.baseUrl + '/login', userDto)
    promise.then(response => {
      this.setTokenSeguranca(response)
      this.setUserLocalStorage(userDto)
    })

    return promise
  }

  cadastroUser(userDto) {
    const promise = this.post(userDto)
    promise.then(() => this.login(userDto))
    return promise
  }

  projetosPorUsuario(username) {
    const config = this.getHeaders()
    axios.get(this.baseUrl+'projects/public/'+username, config)
  }

  projetosDoUsuario() {
    const config = this.getHeaders()
    axios.get(this.baseUrl+'projects', config)
  }

  projetosCompartilhadosComUsuario() {
    const config = this.getHeaders()
    axios.get(this.baseUrl+'projects/shared', config)
  }

  setUserLocalStorage(user) {
    user.password = undefined // just in case
    localStorage.setItem(localStorageUserLocation, JSON.stringify(user))
  }

  setTokenSeguranca(token) {
    localStorage.setItem(this.localStorageAuthLocation, token)
  }

  static getUserLogado() {
    const userString = localStorage.getItem(localStorageUserLocation)
    return JSON.parse(userString)
  }


}