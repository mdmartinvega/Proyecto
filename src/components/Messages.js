import '../styles/Messages.css';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';


export default function Messages() {

    const {getToken} = useAuthContext();
    const token = getToken();
    const userId=jwt_decode(token).user.id;

    const [receivedMessages, setReceivedMessages] = useState([]);
    const API_MESSAGES_RECEIVED = `http://localhost:8000/api/messages/receivedMessages/${userId}`;

    useEffect(() => {
        fetch(API_MESSAGES_RECEIVED)
        .then(response => response.json())
        .then(data => setReceivedMessages(data));  
        // eslint-disable-next-line
        }, []);

    let totalMessages = receivedMessages?.total;
    let contentMessages = receivedMessages?.messages;

    // const [sentMessages, setSentMessages] = useState([]);
    // const API_MESSAGES_SENT = `http://localhost:8000/api/messages/sentMessages/${userId}`;

    // useEffect(() => {
    //     fetch(API_MESSAGES_SENT)
    //     .then(response => response.json())
    //     .then(data => setSentMessages(data));  
    //     // eslint-disable-next-line
    //     }, []);

    // let totalsentMessages = sentMessages?.total;
    // let contentsentMessages = sentMessages?.messages;


    return (
        <div>
            <div className="messages-area">
                <h2>Tus mensajes recibidos</h2>
                <h3>Tienes un total de {totalMessages} mensajes</h3>
                <div className="message">
                            <div class="messages-from">
                                {
                                contentMessages?.map(message => {
                                    return (
                                        <div className="one-message">
                                            <h4>{`Mensaje de: ${message?.senderName}`}</h4>
                                            <div class="msg-info-time">{message?.createdAt}</div>
                                            <div class="msg-text"><p>{message?.message}</p></div>
                                            <div className="links">
                                            <Link to={`/contact/${message?.senderId}`}>
                                                Responder a {message?.senderName}
                                            </Link>
                        
                                            <Link to={`/profilePage/${message?.senderId}`}>
                                                Ver ferfil de {message?.senderName}
                                            </Link>
                                            </div>
                                            
                                        </div>
                                    ) 
                                })
                                }
            
                            </div>
                </div>
            
            {/* </div>
            <div className="messages-area">
                <h2>Tus mensajes enviados</h2>
                <h3>Tienes un total de {totalsentMessages} mensajes</h3>
                <div className="message">
                            <div class="messages-from">
                                {
                                contentsentMessages?.map(message => {
                                    return (
                                        <div className="one-message">
                                            <h4>{`Mensaje a: ${message?.receiverId}`}</h4>
                                            <div class="msg-info-time">{message?.createdAt}</div>
                                            <div class="msg-text"><p>{message?.message}</p></div>
                                            <div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
            
                            </div>
                </div> */}
            
            </div>
        </div>
    
    )
}

