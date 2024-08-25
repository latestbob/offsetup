import React from 'react';

import routes from './routes';
import {Route, Routes, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';



const RenderRoutes: React.FC = () => {

    const location = useLocation();

    useEffect(() => {
        // Find the route that matches the current path
        const currentRoute = routes.find(route => {
            // Match exact paths
            if (route.path === location.pathname) {
                return true;
            }
            // Match dynamic paths
            if (route.path.includes('/:office') && location.pathname.startsWith('/')) {
                return true;
            }
            return false;
        }) || routes.find(route => route.path === '*'); // Fallback to catch-all route
        
        if (currentRoute && currentRoute.pageTitle) {
            document.title = currentRoute.pageTitle;
        }
    }, [location]);
    

     return (
        <>
            <Routes>
                {/* loop throuught the routes */}
                 {routes.map(({id, path, component:Component, exact}) => (
                     <Route
                     key={id}
                     path={path}
                     element={<Component />}
                   />
                 ))}
            </Routes>

        </>
     );

}


export default RenderRoutes;