import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Message = (props) => {
  return (
    <p class="props-txt">{props.txt}</p>
  );
};

const App = (props) => {
  return (
    <Message {...props} />
  );
};

ReactDOM.render(
  <App const txt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi.' />,
  document.getElementById('root')
);
