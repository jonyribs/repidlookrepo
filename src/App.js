import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home'; // Ajuste o caminho conforme necessário

function App() {
  return (
    <Router basename="/repidlookrepo">
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
