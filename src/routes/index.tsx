import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import CadastroProduto from '../pages/Cadastros/produtos';
import Painel from '../pages/Cadastros/Painel';
import FromaPagamento from '../pages/Cadastros/Forma de Pagamento/cadastro_formapagamento';
import Dashboard from '../pages/DashBoard';
//<Route path="/dashboard" component={Dashboard} isPrivate />
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    
    <Route path="/cadastro" exact component={Painel} />
    <Route path="/formapagamento" exact component={FromaPagamento} />
    <Route path="/cadastroprodutos" exact component={CadastroProduto} />
  </Switch>
);

export default Routes;
