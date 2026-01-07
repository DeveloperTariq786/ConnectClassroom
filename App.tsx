import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FindTuitions from './components/FindTuitions';
import TuitionDetail from './components/TuitionDetail';
import Footer from './components/Footer';

const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/find-tuitions" element={<FindTuitions />} />
            <Route path="/tuitions/:id" element={<TuitionDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;