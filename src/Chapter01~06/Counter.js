import React, { useState } from 'react';

const Counter = () => {
  const [message, setMessage] = useState('');

  const onClickEnter = () => {
    setMessage('안녕하세요!');
  };
  const onClickExit = () => {
    setMessage('안녕히가세요!');
  };

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickExit}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={() => setColor('red')}>빨간색</button>
      <button onClick={() => setColor('green')}>초록색</button>
      <button onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
};

export default Counter;
