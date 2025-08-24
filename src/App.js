import React from 'react';
import NaturalNumbers from './components/NaturalNumbers';
import ArmstrongChecker from './components/ArmstrongChecker';
import FactorialCalculator from './components/FactorialCalculator';
import GreatestOfThree from './components/GreatestOfThree';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Math Programs</h1>
      <div className="programs-grid">
        <NaturalNumbers />
        <ArmstrongChecker />
        <FactorialCalculator />
        <GreatestOfThree />
      </div>
    </div>
  );
}

export default App;