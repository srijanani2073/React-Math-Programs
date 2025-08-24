import React, { useState } from 'react';

const ArmstrongChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const checkArmstrong = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      alert('Please enter a valid positive number');
      return;
    }

    const str = num.toString();
    const numDigits = str.length;
    let sum = 0;

    for (let digit of str) {
      sum += Math.pow(parseInt(digit), numDigits);
    }

    const isArmstrong = sum === num;
    setResult({
      number: num,
      isArmstrong: isArmstrong,
      calculation: str.split('').map(d => `${d}^${numDigits}`).join(' + ') + ` = ${sum}`
    });
  };

  return (
    <div className="program-card">
      <h2 className="program-title">Armstrong Number Checker</h2>
      <div className="input-group">
        <label htmlFor="armstrong-number">Enter number:</label>
        <input
          id="armstrong-number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
      </div>
      <button className="btn" onClick={checkArmstrong}>
        Check Armstrong
      </button>
      {result && (
        <div className="result-container">
          <div className="result-title">Result:</div>
          <div className="result-content">
            <div className={`armstrong-result ${result.isArmstrong ? 'armstrong-true' : 'armstrong-false'}`}>
              {result.number} is {result.isArmstrong ? '' : 'NOT '}an Armstrong number
            </div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              Calculation: {result.calculation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArmstrongChecker;