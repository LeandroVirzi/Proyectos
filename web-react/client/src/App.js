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

// al componente LayoutAdmin le voy a pasar todas las rutas
// cuando usamos component unicamente rederizamos un unico componente, pero si utilizamos render podemos renderizar varias cosas.
function RouteWithSubRoutes(route) {
  //console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
};
 

export default App;
