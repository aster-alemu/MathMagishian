import React, { useState } from 'react';
import calculate from './logic/calculate';

function Numbers() {
  return (
    <Calculator />
  );
}
function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  function handleClick(element) {
    const buttonName = element.target.name;
    setState((state) => calculate(state, buttonName));
  }
  return (
    <div className="container">
      <div className="resultContainer">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="keypade">
        <button name="AC" onClick={handleClick} type="button">AC</button>
        <button name="+/-" onClick={handleClick} type="button">&plusmn;</button>
        <button name="%" onClick={handleClick} type="button">&#37;</button>
        <button className="highlight" name="/" onClick={handleClick} type="button">&divide;</button>
        <button name="7" onClick={handleClick} type="button">7</button>
        <button name="8" onClick={handleClick} type="button">8</button>
        <button name="9" onClick={handleClick} type="button">9</button>
        <button name="x" onClick={handleClick} className="highlight" type="button">&times;</button>
        <button name="4" onClick={handleClick} type="button">4</button>
        <button name="5" onClick={handleClick} type="button">5</button>
        <button name="6" onClick={handleClick} type="button">6</button>
        <button className="highlight" name="-" onClick={handleClick} type="button">&minus;</button>
        <button name="1" onClick={handleClick} type="button">1</button>
        <button name="2" onClick={handleClick} type="button">2</button>
        <button name="3" onClick={handleClick} type="button">3</button>
        <button className="highlight" name="+" onClick={handleClick} type="button">&#x2B;</button>
        <button className="zero" name="0" onClick={handleClick} type="button">0</button>
        <button name="." onClick={handleClick} type="button">.</button>
        <button className="highlight" name="=" onClick={handleClick} type="button">&#x3d;</button>
      </div>
    </div>
  );
}
export default Numbers;
