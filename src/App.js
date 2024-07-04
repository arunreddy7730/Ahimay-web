import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Product from './components/Product';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Careers from './components/Careers';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <Services />
       <Product />
      <Industries />
      <Clients />
      <Careers />
      <Contacts />
     
    </div>
  );
}

export default App;


