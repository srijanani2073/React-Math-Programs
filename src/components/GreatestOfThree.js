import React, { useState } from 'react';

const GreatestOfThree = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [result, setResult] = useState(null);

  const findGreatest = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert('Please enter valid numbers in all fields');
      return;
    }

    let greatest = n1;
    if (n2 > greatest) greatest = n2;
    if (n3 > greatest) greatest = n3;

    setResult({
      numbers: [n1, n2, n3],
      greatest: greatest
    });
  };

  return (
    <div className="program-card">
      <h2 className="program-title">Greatest of 3 Numbers</h2>
      <div className="three-inputs">
        <div className="input-group">
          <label htmlFor="num1">Number 1:</label>
          <input
            id="num1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="num2">Number 2:</label>
          <input
            id="num2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="num3">Number 3:</label>
          <input
            id="num3"
            type="number"
            value={num3}
            onChange={(e) => setNum3(e.target.value)}
            placeholder="Enter third number"
          />
        </div>
      </div>
      <button className="btn" onClick={findGreatest}>
        Find Greatest
      </button>
      {result && (
        <div className="result-container">
          <div className="result-title">Result:</div>
          <div className="result-content">
            <div className="greatest-result">
              Greatest number among {result.numbers.join(', ')} is: {result.greatest}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GreatestOfThree;