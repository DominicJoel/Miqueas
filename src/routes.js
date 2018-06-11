import React from 'react';
import { Route, Switch } from 'react-router-dom';//Para las rutas

//Componentes
import App from './App';//Donde renderiza la aplicacion
import AddContact from './Component/AddContact';
import ShowContact from './Component/ShowContact';
import Page404 from './Component/Page404';

const AppRoutes = () =>
   <App>
           <Switch>
                  <Route path ="/add" component = {AddContact} />
                  <Route path ="/" component = {ShowContact} />
                  <Route component = {Page404} />
           </Switch>
   </App>
   export default AppRoutes;