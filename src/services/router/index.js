import {
  LoginPage,
  HomePage,
  ObjetivoPage
} from 'app-pages'

export class RouterService {
  static ROUTES = [
    {
      hideOnMenu: false,
      name: 'Login',
      path: '/login',
      exact: true,
      component: LoginPage
    },
    {
      name: 'Objetivo',
      path: '/objetivo',
      icon: 'Objetivo',
      exact: true,
      component: ObjetivoPage
    },
    {
      name: 'Home',
      path: '/home',
      icon: 'Home',
      exact: true,
      component: HomePage
    }
  ]
}