import React from 'react';
import ReactDOM from "react-dom";
import Students from './students-table'
import Student from './student'
import {  BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import StudentStore from "./stores/StudentStore";
import NewStudent from './new-student';

ReactDOM.render((
    <Provider StudentStore = {StudentStore}>
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Students} exact />
            <Route path="/profile" component={Student} />
            <Route path="/new" component={NewStudent} />
        </Switch>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
)
