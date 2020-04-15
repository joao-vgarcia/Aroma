import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'


function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/home' exact component={Home}/>
        <Route path='/produtos' exact component={Produtos}/>
        <Route path='/contato' exact component={Contato}/>
    </Switch>
  );
}

export default Routes;