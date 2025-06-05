import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const calculatedResult = eval(input);
        setResult(calculatedResult.toString());
        setInput(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '←'
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`button ${btn === '=' ? 'equals' : ''} ${btn === 'C' ? 'clear' : ''}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;