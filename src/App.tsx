import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuClassique from './pages/MenuClassique';
import HorsDoeuvre from './pages/HorsDoeuvre';
import Desserts from './pages/Desserts';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/classique" element={<MenuClassique />} />
        <Route path="/menu/hors-doeuvre" element={<HorsDoeuvre />} />
        <Route path="/menu/desserts" element={<Desserts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}