import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RenderRoutes from './RenderRoutes';

function App() {
  return (
        <Router>
            <RenderRoutes />
        </Router>
  );
}

export default App;
