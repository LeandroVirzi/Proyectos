import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// as NOMBRE DEL COMPONENTE

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Sistema de Rutas Basico</h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users" component={Users} />

      </div>
    </Router>
  );
};
 

function Home() {
  return (
    <h2>Estamos en el componente Home</h2>
  );
};

function Contact() {
  return <h2>Estamos en el componente Contact...</h2>
}

function Users() {
  return <h2>Estamos en el componente Users</h2>
}

export default App;
