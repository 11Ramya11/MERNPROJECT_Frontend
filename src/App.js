// App.js

import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import Servicesa from './components/Servicesa';
import Servicesaa from './components/Servicesaa';
import Servicesab from './components/Servicesab';
import Servicesac from './components/Servicesac';
import Servicesad from './components/Servicesad';
import Servicesae from './components/Servicesae';
import Servicesaf from './components/Servicesaf';
import Servicesb from './components/Servicesb';
import Servicesba from './components/Servicesba';
import Servicesbb from './components/Servicesbb';
import Servicesbc from './components/Servicesbc';
import Servicesc from './components/Servicesc';
import Servicesca from './components/Servicesca';
import Servicescb from './components/Servicescb';
import Servicescc from './components/Servicescc';
import Servicesd from './components/Servicesd';
import Servicesda from './components/Servicesda';
import Servicesdb from './components/Servicesdb';
import Servicesdc from './components/Servicesdc';
import Servicese from './components/Servicese';
import Servicesea from './components/Servicesea';
import Serviceseb from './components/Serviceseb';
import Servicesec from './components/Servicesec';
import Servicesf from './components/Servicesf';
import Servicesfa from './components/Servicesfa';
import Servicesfb from './components/Servicesfb';
import Servicesfc from './components/Servicesfc';











function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/servicesa" element={<Servicesa />} />
          <Route path="/servicesaa" element={<Servicesaa />} />
          <Route path="/servicesab" element={<Servicesab />} />
          <Route path="/servicesac" element={<Servicesac />} />
          <Route path="/servicesad" element={<Servicesad />} />
          <Route path="/servicesae" element={<Servicesae />} />
          <Route path="/servicesaf" element={<Servicesaf />} />
          <Route path="/servicesb" element={<Servicesb />} />
          <Route path="/servicesba" element={<Servicesba />} />
          <Route path="/servicesbb" element={<Servicesbb />} />
          <Route path="/servicesbc" element={<Servicesbc />} />
          <Route path="/servicesc" element={<Servicesc />} />
          <Route path="/servicesca" element={<Servicesca />} />
          <Route path="/servicescb" element={<Servicescb />} />
          <Route path="/servicescc" element={<Servicescc />} />
          <Route path="/servicesd" element={<Servicesd />} />
          <Route path="/servicesda" element={<Servicesda />} />
          <Route path="/servicesdb" element={<Servicesdb />} />
          <Route path="/servicesdc" element={<Servicesdc />} />
          <Route path="/servicese" element={<Servicese />} />
          <Route path="/servicesea" element={<Servicesea />} />
          <Route path="/serviceseb" element={<Serviceseb />} />
          <Route path="/servicesec" element={<Servicesec />} />
          <Route path="/servicesf" element={<Servicesf />} />
          <Route path="/servicesfa" element={<Servicesfa />} />
          <Route path="/servicesfb" element={<Servicesfb />} />
          <Route path="/servicesfc" element={<Servicesfc />} />











          {/* Use the element prop to render Protectedroute */}
          <Route
            path="/login"
            element={<Protectedroute auth={true} component={Login} />}
          />
          <Route
            path="/register"
            element={<Protectedroute auth={true} component={Register} />}
          />
          <Route
            path="/services"
            element={<Protectedroute auth={true} component={Services} />}
          />
          <Route
            path="/logout"
            element={<Protectedroute auth={true} component={Logout} />}
          />
          
          
              
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
