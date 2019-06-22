import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './menu/components/menu'
import Users from './users/containers/users';

const task = () => <div> <h1> Tareas </h1></div> ;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path='/' component = { Users } />
    <Route exact path='/tasks' component = { task } />
  </BrowserRouter>
)


export default App;