import '../styles/Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <aside>
                <div>
                    <h3>Tu perfil</h3>
                </div>
                
                <div class="list">
                    <div>
                        <p>Conversaciones</p>
                    </div>
                    <div>
                        <p>Contactos</p>
                    </div>
                    <div>
                        <p>Configuración</p>
                    </div>
                </div>
            </aside>
            <div className="main-dashboard">
                <h2>Configuración</h2>
                <p>Completa tu perfil para llegar a más usuarios</p>
                
            </div>
            
        </div>
    )
}
