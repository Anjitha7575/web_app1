import React from 'react';
import './App.css';
import Header from './features/Header/component';
import Dashboard from './features/Dashboard/container';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
