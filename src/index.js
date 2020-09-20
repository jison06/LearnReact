import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

const App = () => {
  const btnStyle = { backgroundColor: 'red', color: 'white' };
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={btnStyle}>{getButtonText()}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
