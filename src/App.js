import React from 'react';
import StyledComponent from './Chapter09/StyledComponent';
import './App.css';

const App = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr></hr>
      {visible && <StyledComponent />}
    </div>
  );
};

export default App;
