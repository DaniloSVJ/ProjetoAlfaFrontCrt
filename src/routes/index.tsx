import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Painel from '../pages/Cadastros/Painel/index';
import FromaPagamento from '../pages/Cadastros/Forma de Pagamento/cadastro_formapagamento';
import Dashboard from '../pages/DashBoard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/cadastro" exact component={Painel} isPrivate/>
    <Route path="/formapagamento" exact component={FromaPagamento} isPrivate/>
    
  </Switch>
);

export default Routes;
