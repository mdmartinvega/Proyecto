import '../styles/Messages.css';
import { useState, useEffect } from 'react';

export default function Messages() {

    const API_MESSAGES = `http://localhost:8000/api/messages`;

    const [receivedMessages, setReceivedMessages] = useState({});

    useEffect(() => {
        fetch(API_MESSAGES)
        .then(response => response.json())
        .then(data => setReceivedMessages(data));  
        // eslint-disable-next-line
        }, []);

    return (
        <div className="message">
            <div className="messages">
                <header class="msger-header">
                    <h3>{`Mensaje de: ${receivedMessages.sender}`}</h3>
                </header>
                <main class="msger-chat">
                    {/* TODO: map con el contenido de los mensajes recibidos */}
                    <div class="messages-from">
                            <div class="msg-info-time">{receivedMessages.createdAt}</div>
                            <div class="msg-text">{receivedMessages.message}</div>
                    </div>
                </main>
            </div>
            <form class="msger-inputarea">
                <input type="text" class="msger-input" placeholder="Escribe tu mensaje..."/>
                <button type="submit" class="msger-send-btn">Send</button>
            </form>
        </div>
    )
}

