const messages = [
    "You're amazing just as you are! 😊",
    "I hope you know how special you are.",
    "If you need a smile, just think of me!",
    "Sending you all the love and positivity! 💖",
    "Surprise! I think you're incredible! 😄"
];

function sendMessage() {
    const inputBox = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = inputBox.value;
    if (userMessage) {
        const userMessageElem = document.createElement('div');
        userMessageElem.textContent = `You: ${userMessage}`;
        chatBox.appendChild(userMessageElem);

        const botMessage = generateResponse(userMessage);
        const botMessageElem = document.createElement('div');
        botMessageElem.textContent = `Bot: ${botMessage}`;
        chatBox.appendChild(botMessageElem);

        inputBox.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function generateResponse(userMessage) {
    // Basic response logic
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
