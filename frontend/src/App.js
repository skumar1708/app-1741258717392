import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <GamePage />
      <Footer />
    </div>
  );
}

export default App;