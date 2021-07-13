import Messages from '../components/Messages';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
import '../styles/Dashboard.css';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <aside>
                <div>
                    <h3>Tu perfil</h3>
                </div>
                
                <div class="list">
                    <div>
                        <NavLink to="dashboard/messages">Mensajes</NavLink>
                    </div>
                    <div>
                        <NavLink to="dashboard/configuration">Configuración</NavLink>
                    </div>
                </div>
            </aside>
            <div>
                <Messages />
                {/* <ConfigurationDashboard/> */}
            </div>
            
        </div>
    )
}
