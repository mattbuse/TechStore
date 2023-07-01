import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Shop } from './components/shop';
import { Phones } from './components/Products/phones';
import { Cart } from './components/cart';
import { Laptops } from './components/Products/laptops';
import { Tablets } from './components/Products/tablets';
import { Wishlist } from './components/wishlist';
import { Footer } from './components/footer';
import { About } from './components/FooterLinks/about';
import { Contact } from './components/FooterLinks/contact';
import { Returns } from './components/FooterLinks/returns';
import { Shipping } from './components/FooterLinks/shipping';
import { ShopContextProvider } from './components/shop-context';
import './App.css'

function App() {

  return (
    <div className='app'>
      <ShopContextProvider>
        <Router>
          <NavBar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/TechStore' element={<Shop />} />
              <Route path='/phones' element={<Phones />} />
              <Route path='/laptops' element={<Laptops />} />
              <Route path='/tablets' element={<Tablets />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/returns' element={<Returns />} />
              <Route path='/shipping' element={<Shipping />} />
            </Routes>
            <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
