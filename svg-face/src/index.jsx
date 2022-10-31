import React from 'react';
import ReactDOM from 'react-dom/client';
import { Face } from './face';

const width = 960;
const height = 500;

const App = () => {
  return (
    <Face
      width={width}
      height={height}
      centerX= {width / 2}
      centerY = {height / 2}
      strokeWidth = {20}
      eyeOffsetX = {90}
      eyeOffsetY = {90}
      eyeRadius = {40}
      mouthWidth = {20}
      mouthRadius = {140}
    />
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
