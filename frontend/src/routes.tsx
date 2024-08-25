import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/Notfound';


const routes = [
    {
        id: 1,
        path: '/',
        component: Home,
        auth: false,
        exact: true,
        route: true,
        pageTitle: 'Offset - Workstation for productivity',
      },

      {
        id: 2,
        path: '/:office/login',
        component: Login,
        auth: false,
        exact: true,
        route: true,
        pageTitle: 'Offset - Login to your workspace',
      },

      {
        id: 3,
        path: '*', // This is a catch-all route for 404 pages
        component: NotFound,
        exact: false,
        auth:false,
        pageTitle: '404 Not Found',
      },
];

export default routes;