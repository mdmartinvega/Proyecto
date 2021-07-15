import '../styles/Messages.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Messages() {
    const {id} = useParams();

    const API_MESSAGES = `http://localhost:8000/api/messages/${id}`;

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
                <main class="msger-chat">
                    <div class="messages-from">
                    {/* {
                    receivedMessages.map(message => {
                        return (
                            <div>
                                <h3>{`Mensaje de: ${message.sender}`}</h3>
                                <div class="msg-info-time">{message.createdAt}</div>
                                <div class="msg-text">{message.message}</div>
                            </div>
                        )
                    })
                } */}
                           
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

