import React from 'react';

const RightCounter = (props) => (
  <div className="option-right">
    <div>
    <p className="counter-option-left">
        <p className="counter-header">US/<br />Canada</p>
        <button className="increaseone">+1</button>
        <input
          name="Amount"
          type="text"
          placeholder="0"
          className="counter-left"
        />
        <button className="decreaseone">-1</button>
      </p>

      <p className="counter-option-left">
        <p className="counter-header">EMEA/<br />APAC</p>
        <button className="increaseone">+1</button>
        <input
          name="Amount"
          type="text"
          placeholder="0"
          className="counter-right"
        />
        <button className="decreaseone">-1</button>
      </p>

      <p className="counter-option-left">
        <p className="counter-header">Latin America</p>
        <button className="increaseone">+1</button>
        <input
          name="Amount"
          type="text"
          placeholder="0"
          className="counter-right"
        />
        <button className="decreaseone">-1</button>
      </p>

      <p className="counter-option-left">
        <p className="counter-header">Japan</p>
        <button className="increaseone">+1</button>
        <input
          name="Amount"
          type="text"
          placeholder="0"
          className="counter-right"
        />
        <button className="decreaseone">-1</button>
      </p>
      
      <p className="counter-option-left">
        <p className="counter-header">Korea</p>
        <button className="increaseone">+1</button>
        <input
          name="Amount"
          type="text"
          placeholder="0"
          className="counter-right"
        />
        <button className="decreaseone">-1</button>
      </p>
    </div>
  </div>
);

export default RightCounter;