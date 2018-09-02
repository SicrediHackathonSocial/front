import {
  LoginPage,
  MeusObjetivosPage,
  ObjetivosCompartilhadosPage,
  ProjetoPage
} from 'app-pages'

export class RouterService {
  static ROUTES = [
    {
      hideOnMenu: true,
      name: 'Login',
      path: '/login',
      exact: true,
      component: LoginPage
    },
    {
      name: 'Novo Projeto',
      path: '/projeto',
      icon: 'Projeto',
      exact: true,
      component: ProjetoPage
    },
    {
      name: 'Meus Objetivos',
      path: '/meus-objetivos',
      exact: true,
      hideOnMenu: true,
      component: MeusObjetivosPage
    },
    {
      name: 'Objetivos Compartilhados',
      path: '/objetivos-compartilhados',
      exact: true,
      hideOnMenu: true,
      component: ObjetivosCompartilhadosPage
    }
  ]
}