import React, { useState } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      alert('Please enter a valid non-negative number');
      return;
    }
    
    if (num > 20) {
      alert('Please enter a number less than or equal to 20 to avoid overflow');
      return;
    }

    let factorial = 1;
    let steps = [];
    
    for (let i = 1; i <= num; i++) {
      factorial *= i;
      steps.push(i);
    }

    setResult({
      number: num,
      factorial: factorial,
      steps: steps.length > 0 ? steps.join(' × ') + ` = ${factorial}` : '1 = 1'
    });
  };

  return (
    <div className="program-card">
      <h2 className="program-title">Factorial Calculator</h2>
      <div className="input-group">
        <label htmlFor="factorial-number">Enter number:</label>
        <input
          id="factorial-number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number (0-20)"
        />
      </div>
      <button className="btn" onClick={calculateFactorial}>
        Calculate Factorial
      </button>
      {result && (
        <div className="result-container">
          <div className="result-title">Result:</div>
          <div className="result-content">
            <div className="factorial-result">
              {result.number}! = {result.factorial}
            </div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              Calculation: {result.steps}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactorialCalculator;