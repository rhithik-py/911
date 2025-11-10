import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Community from './pages/Community';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}
