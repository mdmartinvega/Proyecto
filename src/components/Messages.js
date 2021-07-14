import '../styles/Messages.css';

export default function Messages() {
    return (
        <div className="message">
            <div className="messages">
                <header class="msger-header">
                    <h3>Usuario con el que estoy hablando</h3>
                </header>
                <main class="msger-chat">
                    {/* TODO: map con el contenido de los mensajes recibidos */}
                    <div class="messages-from">
                            <div class="msg-info-time">Propiedad fecha y hora</div>
                            <div class="msg-text">Propiedad contenido mensaje</div>
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

