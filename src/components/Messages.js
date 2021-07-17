import '../styles/Messages.css';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../context/AuthContext";


export default function Messages() {
    const {getToken} = useAuthContext();
    const token = getToken();
    const userId=jwt_decode(token).user.id;

    const [receivedMessages, setReceivedMessages] = useState([]);
    const API_MESSAGES = `http://localhost:8000/api/messages/${userId}`;

    useEffect(() => {
        fetch(API_MESSAGES)
        .then(response => response.json())
        .then(data => setReceivedMessages(data));  
        // eslint-disable-next-line
        }, []);

    let totalMessages = receivedMessages?.total;
    let contentMessages = receivedMessages?.messages;

    return (
        <div className="messages-area">
            <h3>Tienes un total de {totalMessages} mensajes</h3>
            <div className="message">
                        <div class="messages-from">
                        {
                        contentMessages?.map(message => {
                            return (
                                <div className="one-message">
                                    <h4>{`Mensaje de: ${message?.senderName}`}</h4>
                                    <div class="msg-info-time">{message?.createdAt}</div>
                                    <div class="msg-text">{message?.message}</div>
                                </div>
                            )
                        })
                    }
            
                        </div>
            </div>
            <form class="msger-inputarea">
                <input type="text" class="msger-input" placeholder="Escribe tu mensaje..."/>
                <button type="submit" class="msger-send-btn">Send</button>
            </form>
        </div>
    
    )
}

