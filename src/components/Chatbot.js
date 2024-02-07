import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);

      fetch('https://demo1-413518.an.r.appspot.com/upload-pdf', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUploadStatus(data.message || 'Upload failed');
        // Add the upload status to the conversations
        setConversations([{ message: 'PDF Uploaded', response: data.message }, ...conversations]);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setUploadStatus('Upload failed');
        // Add the error status to the conversations
        setConversations([{ message: 'PDF Upload Failed', response: 'Error uploading file' }, ...conversations]);
      });
    }
  };

  const handleSubmit = () => {
    if (message) {
      // Replace with your actual question-asking URL
      fetch('https://demo1-413518.an.r.appspot.com/ask-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      })
      .then(response => response.json())
      .then(data => {
        // Update the conversations array with the new message and response
        setConversations([{ message, response: data.reply }, ...conversations]);
        setMessage(''); // Clear the input after sending
      })
      .catch(error => {
        console.error('Error asking question:', error);
        // Optionally handle the error by adding it to the conversation or alerting the user
      });
    }
  };

  return (
    
    <div className="chatbot-container" >
      <img
              src='https://www.bigpanda.io/wp-content/uploads/2023/09/bigpanda-generative-ai.png'
              path='/'
              style={{ width: '800px',  borderRadius: '30px'}}
            />
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="chatbot-input"
      />
      <button className="chatbot-button" onClick={handleUpload}>
        Upload PDF
      </button>
      {uploadStatus && <div className="chatbot-upload-status">{uploadStatus}</div>}
      <input
        className="chatbot-input"
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your question here"
      />
      <button className="chatbot-button" onClick={handleSubmit}>
        Ask Question
      </button>
      <div className="conversation-container">
        {conversations.map((conversation, index) => (
          <div key={index} className="conversation">
            <div className="user-message">You: {conversation.message}</div>
            <div className="chatbot-response">Bot: {conversation.response}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatbot;