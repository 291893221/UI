import React from 'react'
import { BrowserRouter as RouterRRD, Route, Switch } from 'react-router-dom'
import Default from '../pages/default/Default';
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';
import Table from '../pages/table/Table';
function Router() {
    return <RouterRRD>
        <Switch>
            <Route exact path='/' component={Default}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/main' component={Main}></Route>
            <Route path='/table' component={Table}></Route>
        </Switch>
    </RouterRRD>
}
export default Router;