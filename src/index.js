import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/normalize.css'
import './assets/styles/vars.css'
import './assets/styles/general.css'

localStorage.setItem('userLogado', JSON.stringify({ 
    picture: 'https://static.noticiasaominuto.com.br/stockimages/1920/naom_5a7b1d449168e.jpg?1531755455',
    username: 'Pedro' 
  })
)

  ReactDOM.render((
    <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()