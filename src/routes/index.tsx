import React from 'react';
import {HashRouter, BrowserRouter, Route,Switch} from 'react-router-dom';

import DashBoard from '../pages/DashBoard/index';
import SignIn from '../pages/SignIn/index';

import Painel from '../pages/Cadastros/Painel/index';
import FromaPagamento from '../pages/Cadastros/Forma de Pagamento/cadastro_formapagamento';
// Switch vai garantir que apenas uma rota seja visivel
// //<Route path="/" exact component={Produtos} />
// <Route path="/dashBoard" exact component={DashBoard} />
const Routes: React.FC = () => (
    <HashRouter>

        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" exact component={DashBoard} />
            <Route path="/cadastro" exact component={Painel} />
            <Route path="/formapagamento" exact component={FromaPagamento} />
        </Switch>

    </HashRouter>
);

export default Routes;