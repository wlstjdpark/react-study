import React, { Component } from 'react';
import LifeCycleSample from './Chapter07/LifeCycleSample';
import ErrorBoundary from './Chapter07/ErrorBoundary';
import './App.css';

const App = () => {
  const [color, setColor] = React.useState('#000000');

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const onClick = () => {
    setColor(getRandomColor());
  };
  return (
    <div>
      <button onClick={onClick}>랜덤 색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={color}></LifeCycleSample>
      </ErrorBoundary>
    </div>
  );
};

export default App;
