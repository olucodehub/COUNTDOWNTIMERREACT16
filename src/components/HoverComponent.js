import React from 'react';
import './css/HoverComponent.css';

export const InputComponent = ({ value, onChange, onKeyDown }) => (
  <input
    type='text'
    className='form-control'
    placeholder='Enter a number'
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export const ButtonComponent = ({ hoveredNumber, onMouseEnter }) => (
  <button
    className='btn btn-primary mt-3 position-relative'
    onMouseEnter={onMouseEnter}
  >
    Calculate{' '}
    <span className='badge badge-circle position-absolute'>
      {hoveredNumber}
    </span>
  </button>
);
