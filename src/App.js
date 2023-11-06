import './App.css';
import React, { Component } from "react";
import Navbar from './components/navbar';
import Home from './components/home';
import Estadisticas from './components/estadisticas';
import Donations from './components/donar';
import LoginForm from './components/login';
import ContactUs  from './components/contactanos';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Voluntariados from './components/voluntariados';
import Register from './components/registrarse';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/Home" element={<Home/>} />
            <Route path="/voluntariados" element={<Voluntariados/>} />
            <Route path="/Estadisticas" element={<Estadisticas/>} />
            <Route path="/Contactanos" element={<ContactUs/>} />
            <Route path="/Donar" element={<Donations/>} />
            <Route path="/Login" element={<LoginForm/>} />
            <Route path="/SignUp" element={<Register/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
