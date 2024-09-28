import React, { useState, useEffect } from 'react';

const Box = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showBox, setShowBox] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const chatLogs = document.querySelector('.chat-logs');
    if (chatLogs) {
      chatLogs.scrollTop = chatLogs.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (msg, type) => {
    setIndex(prevIndex => prevIndex + 1);
    setMessages(prevMessages => [
      ...prevMessages,
      { id: index, type: type, text: msg }
    ]);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const msg = inputMessage.trim();
    if (msg === '') return;

    handleSendMessage(msg, 'self');

    const buttons = [
      { name: 'Existing User', value: 'existing' },
      { name: 'New User', value: 'new' }
    ];

    setTimeout(() => {
      handleSendMessage("Do you want to continue as an existing user or a new user?", 'user');
      generateButtonMessage(buttons);
    }, 1000);
  };

  const generateButtonMessage = (buttons) => {
    setIndex(prevIndex => prevIndex + 1);
    const btnElements = buttons.map((button, idx) => (
      <li className="button" key={idx}>
        <a href="#" className="chat-btn" data-value={button.value}>
          {button.name}
        </a>
      </li>
    ));

    setMessages(prevMessages => [
      ...prevMessages,
      { id: index, type: 'user', buttons: btnElements }
    ]);

    document.getElementById("chat-input").disabled = true;
  };

  const handleButtonClick = (value, name) => {
    document.getElementById("chat-input").disabled = false;
    handleSendMessage(name, 'self');
  };

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <div id="chat-circle" className="chat-circle" onClick={toggleBox} style={{ display: showBox ? 'none' : 'block' }}>
        <i className="fa-solid fa-message chat-message"></i>
      </div>

      <div className="chat-box" style={{ display: showBox ? 'flex' : 'none' }}>
        <div className="chat-box-header">
          Chat
          <span className="chat-box-toggle" onClick={toggleBox}>X</span>
        </div>
        <div className="chat-logs">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.type}`}>
              <div className="cm-msg-text">{msg.text}</div>
              {msg.buttons && <div className="cm-msg-button"><ul>{msg.buttons}</ul></div>}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <textarea
            id="chat-input"
            placeholder="Type a message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button id="chat-submit" onClick={handleChatSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Box;
