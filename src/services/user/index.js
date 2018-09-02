import BaseService from '../_base'
import axios from "axios"
import EventEmitter from 'sm-event-emitter'
 
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

    EventEmitter.emit('USER_LOGIN')
    
    return promise
  }

  logout() {
    this.setTokenSeguranca(null)
    this.setUserLocalStorage(null)
    EventEmitter.emit('USER_LOGOUT')
  }

  cadastroUser(userDto) {
    const promise = this.post(userDto)
    promise.then(() => this.login(userDto))
    return promise
  }

  projetosPorUsuario(username) {
    const config = this.getHeaders()
    return axios.get(this.baseUrl+'/projects/public/'+username, config)
  }

  projetosDoUsuario() {
    const config = this.getHeaders()
    return axios.get(this.baseUrl+'/projects', config)
  }

  projetosCompartilhadosComUsuario() {
    const config = this.getHeaders()
    return axios.get(this.baseUrl+'/projects/shared', config)
  }

  setUserLocalStorage(user) {
    if (user) {
      user.password = undefined // just in case
      user.picture = 'https://static.noticiasaominuto.com.br/stockimages/1920/naom_5a7b1d449168e.jpg?1531755455'
    } 
      
    localStorage.setItem(localStorageUserLocation, JSON.stringify(user))
    EventEmitter.emit('USER_LOGIN')
  }

  setTokenSeguranca(token) {
    localStorage.setItem(this.localStorageAuthLocation, token)
  }

  static getUserLogado() {
    const userString = localStorage.getItem(localStorageUserLocation)
    return JSON.parse(userString)
  }


}