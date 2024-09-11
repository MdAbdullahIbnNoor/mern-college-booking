import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Colleges from './components/pages/Colleges';
import Admission from './components/pages/Admission';
// import MyCollege from './components/pages/MyCollege';
import Profile from './components/pages/Profile';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/colleges" element={<Colleges />} /> */}
        <Route path="/admission" element={<Admission />} />
        {/* <Route path="/my-college" element={<MyCollege />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
