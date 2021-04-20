import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NOT from './pages/NotFound';
import Login from './pages/Login'
import Cadastro from './pages/Cadastrese'



export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sobre">
                <Sobre />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/cadastre-se">
                <Cadastro />
            </Route>
            <Route>
                <NOT />
            </Route>
        </Switch>
    );
}