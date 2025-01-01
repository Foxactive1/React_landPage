// src/api/chatbotResponse.js
import responses from "../responses.json";

export function getChatbotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  for (const entry of responses) {
    for (const keyword of entry.keywords) {
      if (message.includes(keyword)) {
        return entry.response;
      }
    }
  }

  return "Desculpe, não tenho uma resposta para isso no momento.";
}
