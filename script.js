
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input")
const sendMessageButton = document.querySelector("#send-message")

const userData = {
    message: null
}

const createMessageElement = (content, classes) => {
    const div = document.createElement("div")
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;

}

const handleOutgoingMessage = (e) => {
    e.preventDefault()
    userData.message = messageInput.value.trim();

    const messageContent = `<div class="message-text">${userData.message}</div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, "user-message")
    chatBody.appendChild(outgoingMessageDiv)
}
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage) {
        handleOutgoingMessage(e)
    }
})

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e))