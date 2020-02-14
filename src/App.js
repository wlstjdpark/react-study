import React from 'react';
import InfoUseReducer from './Chapter08/InfoUseReducer';
import './App.css';

const App = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr></hr>
      {visible && <InfoUseReducer />}
    </div>
  );
};

export default App;
