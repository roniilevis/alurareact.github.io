import React from 'react';
import './reset.css';
import Header from './Componentes/Header/Header';
import Home from "./Componentes/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaForm from './Componentes/pages/PaginaForm';
import BotonGet from './Componentes/Botones/BotonGet';



 function App() {
  return (
    <div>
     <Router>
         <Header />
       <Routes>
         <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/Formulario" element={<BotonGet />}></Route>
       </Routes>
     </Router>
    
    </div>
    
  );
}

export default App;
