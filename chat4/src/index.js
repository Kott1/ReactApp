import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [state, setState] = useState('');

  const [messageList, setMessageList] = useState([])

  const f = (e) => {
    setState(e.target.value);
  }

  const send = () => {
    messageList.push({ text: state, author: '' })
  }

  return (
    <div class='wrap'>
      <div class='message'>{messageList.map(message => <p>{message.text}</p>)}</div>
      <input class='input' type="text" value={state} onChange={f} placeholder='Сообщение...' />
      <button class='submit' onClick={send}>Отправить</button>
    </div>
  );
};

ReactDOM.render(
  <App />, document.getElementById('root')
);