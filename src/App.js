// src/App.js
import React, { useState } from "react";
import Chatbot from "./components/Chatbot";
import "./App.css";

const App = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="app-container">
      {/* Conteúdo principal do site aqui */}
      <div className="content">
        <header className="main-header">
          <h1>InNovaIdeia</h1>
          <p>Soluções em Tecnologia e Inovação</p>
        </header>
        
        {/* Outros componentes do site viriam aqui */}
      </div>
      
      {/* Chatbot com toggle para mobile */}
      <div className={`chatbot-wrapper ${showChat ? 'visible' : 'hidden'}`}>
        <Chatbot />
      </div>
      
      {/* Botão para abrir/fechar o chat em dispositivos móveis */}
      <div className="chat-toggle" onClick={toggleChat}>
        {showChat ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="chat-toggle-icon">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="chat-toggle-icon">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default App;
