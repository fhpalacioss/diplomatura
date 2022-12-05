import ReactDOM from 'react-dom'
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/services';
import Processes from './pages/processes';
import Contact from './pages/contact'; 
import Header from './component/Header';
import NovedadesPage from './pages/NovedadesPage'

import './index.css';


ReactDOM.render(
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Header/>}>
    <Route index element={<Home/>} />
     <Route path="/servicios" element={<Service/>} />
     <Route path="/procesos" element={<Processes/>} />
     <Route path="/NovedadesPage" element={<NovedadesPage/>} />
     <Route path="/contactanos" element={<Contact/>} />
     <Route path="*" element={<Navigate replace to="/"/>} /> 
  </Route>
  </Routes>
</BrowserRouter>,
document.getElementById("root")
);

