import '../styles/Messages.css';



export default function Messages() {
    return (
        <div>

            <section class="msger">
            <header class="msger-header">
                <div class="msger-header-title">
                <h3>Usuario con el que estoy hablando</h3>
                </div>
            </header>

            <main class="msger-chat">
                <div class="msg left-msg">
                    <div
                    class="msg-img"
                    ></div>

                    <div class="msg-bubble">
                        <div class="msg-info-time">12:45</div>
                        <div class="msg-text">
                        Hola, cómo va todo?
                        </div>
                    </div>
                </div>
                <div class="msg right-msg">
                <div
                class="msg-img"
                ></div>

                <div class="msg-bubble">
                    <div class="msg-info">
                    <div class="msg-info-name">Sajad</div>
                    <div class="msg-info-time">12:46</div>
                    </div>
                    <div class="msg-text">
                    You can change your name in JS section!
                    </div>
                </div>
                </div>
            </main>
            <form class="msger-inputarea">
                <input type="text" class="msger-input" placeholder="Escribe tu mensaje..."/>
                <button type="submit" class="msger-send-btn">Send</button>
            </form>
            </section>
            
        </div>
    )
}

