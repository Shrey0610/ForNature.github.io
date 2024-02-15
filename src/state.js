// ChatApp.js

import React, { useState, useEffect } from 'react';
import App5 from './App5'; // Import the App component
import './App3.css';

const ChatApp = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [apiResponse, setAPIResponse] = useState('');

  useEffect(() => {
    // Fetch initial chat messages or load from storage
    // For simplicity, I'll just fetch a welcome message here
    fetchAPIResponse();
  }, []);

  const fetchChatMessages = async (message) => {
    try {
      // Fetch the answer from testapi for the given question
      const response = await fetch('http://localhost:9004/testapi', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });

      const data = await response.json();

      const newMessages = [
        ...chatMessages,
        { text: message, type: 'user' },
        { text: data.answer || 'No answer available', type: 'ai' },
      ];

      setChatMessages(newMessages);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      const errorMessage = 'Error fetching answer';
      const newMessages = [...chatMessages, { text: message, type: 'user' }, { text: errorMessage, type: 'ai' }];
      setChatMessages(newMessages);
    }
  };

  const fetchAPIResponse = async () => {
    try {
      // Fetch API response from your backend
      const response = await fetch('http://localhost:9004/testapi');
      const data = await response.json();
      setAPIResponse(data);
    } catch (error) {
      console.error('Error fetching API response:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessages = [...chatMessages, { text: inputMessage, type: 'user' }];
    setChatMessages(newMessages);
    setInputMessage('');

    // Fetch answer from testapi
    fetchChatMessages(inputMessage);
  };

  return (
    <div className="chat-app">
      <App5 apiResponse={apiResponse} /> {/* Render the App component with the API response */}
      <section className="chat">
        <h2>Chat with AI</h2>
        <div className="chat-box">
          {chatMessages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
