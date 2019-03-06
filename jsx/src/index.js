// import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  const buttonText = {text: "click me"};
  const labelText = 'enter name:'

  return (
        <div>
          <label htmlFor="name">
            {labelText}
          </label>
          <input id="name" type="text" />
          <button style={{backgroundColor: "blue",color: "white"}}>
            {buttonText.text}
          </button>
        </div>
  );
};

//take the react component and show it
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
