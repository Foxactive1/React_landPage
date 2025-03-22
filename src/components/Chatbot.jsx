// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from "react";
import { getChatbotResponse } from "../api/chatbotResponse";
import "./Chatbot.css"; // Vamos criar este arquivo de CSS

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Função para rolar para a mensagem mais recente
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mensagem de boas-vindas ao iniciar o chat
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          sender: "Chatbot",
          text: "Olá! Sou o assistente virtual da InNovaIdeia. Como posso ajudar você hoje?"
        }
      ]);
    }, 1000);
  }, []);

  const handleSendMessage = () => {
    const userMessage = input.trim();
    if (userMessage) {
      // Adiciona a mensagem do usuário
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Usuário", text: userMessage }
      ]);
      
      // Limpa o campo de entrada
      setInput("");
      
      // Simula o chatbot digitando
      setIsTyping(true);
      
      // Simula um pequeno atraso para parecer mais natural
      setTimeout(() => {
        // Obtém a resposta do chatbot
        const response = getChatbotResponse(userMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Chatbot", text: response }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  // Detecta a tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="company-logo">
          <svg viewBox="0 0 24 24" className="logo-icon" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <h2>InNovaIdeia Chatbot</h2>
        <button className="minimize-btn" aria-label="Minimizar chat">
          <span></span>
        </button>
      </div>
      
      <div className="chatbot-messages" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.sender === "Chatbot" ? "bot" : "user"}`}
          >
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message bot">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
        />
        <button 
          onClick={handleSendMessage}
          className={input.trim() ? "active" : ""}
          disabled={!input.trim()}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="send-icon">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
