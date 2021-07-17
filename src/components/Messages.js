import '../styles/Messages.css';
import { useState, useEffect } from 'react';

export default function Messages({id}) {

    console.log(id);
    console.log(id);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const API_MESSAGES = `http://localhost:8000/api/messages/${id}`;

    useEffect(() => {
        fetch(API_MESSAGES)
        .then(response => response.json())
        .then(data => setReceivedMessages(data));  
        // eslint-disable-next-line
        }, []);

    let totalMessages = receivedMessages?.total;
    let contentMessages = receivedMessages?.messages;

    return (
        <div className="message">
            <p>Tienes un total de {totalMessages} mensajes</p>
                    <div class="messages-from">
                    {
                    contentMessages?.map(message => {
                        return (
                            <div>
                                <h3>{`Mensaje de: ${message?.senderName}`}</h3>
                                <div class="msg-info-time">{message?.createdAt}</div>
                                <div class="msg-text">{message?.message}</div>
                            </div>
                        )
                    })
                }
                          
                    </div>

            <form class="msger-inputarea">
                <input type="text" class="msger-input" placeholder="Escribe tu mensaje..."/>
                <button type="submit" class="msger-send-btn">Send</button>
            </form>
        </div>
    )
}

