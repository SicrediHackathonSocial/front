import {
  LoginPage,
  HomePage,
  ProjetoPage
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
      name: 'Projeto',
      path: '/projeto',
      icon: 'Projeto',
      exact: true,
      component: ProjetoPage
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