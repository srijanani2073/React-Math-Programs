import React, { useState } from 'react';

const NaturalNumbers = () => {
  const [count, setCount] = useState('');
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const num = parseInt(count);
    if (num > 0 && num <= 100) {
      const naturalNums = [];
      for (let i = 1; i <= num; i++) {
        naturalNums.push(i);
      }
      setNumbers(naturalNums);
    } else {
      alert('Please enter a number between 1 and 100');
    }
  };

  return (
    <div className="program-card">
      <h2 className="program-title">Natural Numbers Generator</h2>
      <div className="input-group">
        <label htmlFor="natural-count">Enter count:</label>
        <input
          id="natural-count"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Enter a number (1-100)"
        />
      </div>
      <button className="btn" onClick={generateNumbers}>
        Generate Numbers
      </button>
      {numbers.length > 0 && (
        <div className="result-container">
          <div className="result-title">First {count} Natural Numbers:</div>
          <div className="result-content">
            <div className="natural-numbers">
              {numbers.map(num => (
                <span key={num} className="number-badge">{num}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NaturalNumbers;