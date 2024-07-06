
import {SOCKET_MESSAGE_TYPES} from "./GLOBAL_CONSTANTS.js";
const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

const {CHAT_MESSAGE} = SOCKET_MESSAGE_TYPES;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit(CHAT_MESSAGE.label, CHAT_MESSAGE.toStr(window.nick, input.value));
        input.value = '';
    }
});

socket.on(CHAT_MESSAGE.label, (msg) => {
    const item = document.createElement('li');
    const messageData = CHAT_MESSAGE.fromStr(msg);


    item.textContent = `${messageData.username}: ${messageData.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

