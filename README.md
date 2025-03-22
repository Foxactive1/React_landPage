# InNovaIdeia Chatbot

Chatbot responsivo desenvolvido em React para o site da InNovaIdeia, oferecendo respostas automáticas sobre serviços, produtos e informações da empresa.

## Características

- Interface moderna e responsiva
- Adaptação automática para dispositivos móveis e desktop
- Animações e efeitos visuais para melhor experiência do usuário
- Sistema de respostas baseado em palavras-chave
- Indicador de digitação para feedback visual

## Instalação

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/innovaideia-chatbot.git
```

2. Instale as dependências:
```
cd innovaideia-chatbot
npm install
```

3. Execute o projeto:
```
npm start
```

## Estrutura do Projeto

- `src/App.js` - Componente principal que contém o toggle do chatbot
- `src/components/Chatbot.jsx` - Componente do chatbot
- `src/components/Chatbot.css` - Estilos do chatbot
- `src/api/chatbotResponse.js` - Lógica para processar respostas
- `src/responses.json` - Base de conhecimento com palavras-chave e respostas

## Personalização

Você pode facilmente personalizar o chatbot:

1. Edite `responses.json` para adicionar novas palavras-chave e respostas
2. Modifique os estilos em `Chatbot.css` para alterar cores e layout
3. Ajuste as animações e comportamentos no componente `Chatbot.jsx`

## Tecnologias

- React.js
- CSS3 com animações
- Design responsivo

## Licença

Este projeto é licenciado sob a licença MIT.
