import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Prueba from "./component/Prueba";
import Navegation from "./component/navegation/Navegation";
import Home from './component/home/Home'
import Cities from './component/cities/Cities'
import City from './component/city/City'
import Footer from './component/footer/Footer'







function App() {

  useEffect(() => {
    axios.get("http://localhost:4000/api/allcities")
      .then(response => console.log(response.data.response.ciudades))
        


  }, [])


  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
        <Route path="city" element={<City />} />
   
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
