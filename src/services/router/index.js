import {
  LoginPage,
  MeusObjetivosPage,
  ObjetivosCompartilhadosPage,
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
      name: 'Meus Objetivos',
      path: '/meus-objetivos',
      exact: true,
      component: MeusObjetivosPage
    },
    {
      name: 'Objetivos Compartilhados',
      path: '/objetivos-compartilhados',
      exact: true,
      component: ObjetivosCompartilhadosPage
    }
  ]
}