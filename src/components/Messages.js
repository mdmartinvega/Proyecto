import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { API_MESSAGES_RECEIVED } from '../Settings';



export default function Messages({user}) {

    const {getToken} = useAuthContext();
    const token = getToken();
    const userId=jwt_decode(token).user.id;

    const [receivedMessages, setReceivedMessages] = useState([]);

    useEffect(() => {
        fetch(API_MESSAGES_RECEIVED + `${userId}`)
        .then(response => response.json())
        .then(data => setReceivedMessages(data));  
        // eslint-disable-next-line
        }, []);

    let totalMessages = receivedMessages?.total;
    let contentMessages = receivedMessages?.messages;

    const [sentMessages, setSentMessages] = useState([]);
    const API_MESSAGES_SENT = `http://localhost:8000/api/messages/sentMessages/${userId}`;

    useEffect(() => {
        fetch(API_MESSAGES_SENT)
        .then(response => response.json())
        .then(data => setSentMessages(data));  
        // eslint-disable-next-line
        }, []);

    let totalsentMessages = sentMessages?.total;
    let contentsentMessages = sentMessages?.messages;

    const dateFormat = formerDate => {
        const splitDate = formerDate.split('-');
        const year = splitDate[0];
        const month = splitDate[1];
        const day = splitDate[2].slice(0,2);
        const time = splitDate[2].slice(3,8);

     
        return (day + '-' + month + '-' + year + ' a las ' + time)
    }

    return (
        <div>
            <div className="messages-area">
                <h2>Tus mensajes recibidos</h2>
                <h3>Tienes un total de {totalMessages} mensajes</h3>
                <div className="message">
                        <div className="messages-from">
                            {
                            contentMessages?.map(message => {
                                return (
                                    <div className="one-message">
                                        <h4>{`Mensaje de: ${message?.senderName}`}</h4>
                                        <div className="msg-info-time">{dateFormat(message?.createdAt)}</div>
                                        <div className="msg-text"><p>{message?.message}</p></div>
                                        <div className="links">
                                        <Link to={`/contact/${message?.senderId}`} key={message.id}>
                                            Responder a {message?.senderName}
                                        </Link>
                    
                                        <Link to={`/profilePage/${message?.senderId}`} key={message.id}>
                                            Ver ferfil de {message?.senderName}
                                        </Link>
                                        </div>                       
                                    </div>
                                ) 
                            })
                            }
                        </div>
                </div>
                {/* {jwt_decode(token).user.role > 1 ? <Link to={`/profilesBuddies/${user?.cityId.id}`}>Ver otros perfiles en tu misma ciudad</Link> 
                : <Link to={`/profilesUsers/${user?.cityId.id}`}>Ver otros perfiles en tu misma ciudad</Link>} */}
            
            </div>
            <div className="messages-area">
                <h2>Tus mensajes enviados</h2>
                <h3>Tienes un total de {totalsentMessages} mensajes enviados</h3>
                <div className="message">
                            <div class="messages-from">
                                {
                                contentsentMessages?.map(messagesent => {
                                    return (
                                        <div className="one-message">
                                            <h4>{`Mensaje para: ${messagesent?.receiverName}`}</h4>
                                            <div class="msg-info-time">{dateFormat(messagesent?.createdAt)}</div>
                                            <div class="msg-text"><p>{messagesent?.message}</p></div>
                                            <div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
            
                            </div>
                </div>
            
            </div>
        </div>
    
    )
}

