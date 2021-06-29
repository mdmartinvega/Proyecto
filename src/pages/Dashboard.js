import Chat from '../components/Chat';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
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
            <div>
                <ConfigurationDashboard/>
                <Chat />
            </div>
            
        </div>
    )
}
