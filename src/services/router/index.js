import {
  LoginPage,
  HomePage
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
      name: 'Home',
      path: '/home',
      icon: 'Home',
      exact: true,
      component: HomePage
    }
  ]
}