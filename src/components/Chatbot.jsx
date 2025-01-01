// src/components/Chatbot.jsx
import React, { useState } from "react";
import { getChatbotResponse } from "../api/chatbotResponse";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInpu,t] = useState("");

  const handleSendMessage = () => {
    const userMessage = input.trim();
    if (userMessage) {
      // Adiciona a mensagem do usuário
      setMessages((prevMessages) => [...prevMessages, { sender: "Usuário", text: userMessage }]);
      
      // Obtém a resposta do chatbot
      const response = getChatbotRespons,e(userMessage);
      setMessages((prevMessages) => [...prevMessages, { sender: "Chatbot", text: response }]);

      // Limpa o campo de entrada
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", width: "400px", margin: "auto", border: "1px solid #ddd" }}>
      <h2>InNovaIdeia Chatbot</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="Digite sua mensagem..."
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleSendMessage} style={{ width: "100%", padding: "10px" }}>
        Enviar
      </button>
    </div>
  );
};

export default Chatbot;
