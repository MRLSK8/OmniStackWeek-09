import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import DashBoard from './Pages/DashBoard';
import New from './Pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/new" component={New}/>
        <Route path="/dashboard" component={DashBoard}/>
      </Switch>
    </BrowserRouter>
  );
}
