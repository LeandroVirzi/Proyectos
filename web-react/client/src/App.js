import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './config/routes'; 


import './App.scss';

// cuando renderice el primer componente no continue renderizando otros componentes parecidos uso Switch
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))};
      </Switch>
    </Router>
  );
};

function RouteWithSubRoutes(route) {
  console.log(route);
  return true;
};
 

export default App;
