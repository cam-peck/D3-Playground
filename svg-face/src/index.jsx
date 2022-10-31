import React from 'react';
import ReactDOM from 'react-dom/client';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 50;

const App = () => {
  return (
    <svg width={width} height={height} >
      <circle
        cx={centerX}
        cy={centerY}
        r={centerY - strokeWidth / 2}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={centerX - eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={centerX + eyeOffsetX}
        cy={centerY - eyeOffsetY}
        r={eyeRadius}
      />
    </svg>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
