// src/pages/Pages.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Train from './Train';
import PreTrained from './PreTrained';

function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<Train />} />
        <Route path="/pre-trained" element={<PreTrained />} />
      </Routes>
    </Router>
  );
}

export default Pages;
