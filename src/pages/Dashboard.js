import Messages from '../components/Messages';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
import '../styles/Dashboard.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { PLACEHOLDER_URL } from '../Settings';

export default function Dashboard() {

    const API_PROFILES = "http://localhost:8000/api/buddies";

    const [profileResults, setProfileResults] = useState([]);

    useEffect(() => {
        fetch(API_PROFILES)
        .then(response => response.json())
        .then(data => setProfileResults(data));
        // eslint-disable-next-line  
        }, []);

    const src = profileResults.image ? `http://localhost:8000/images/${profileResults.image}` : PLACEHOLDER_URL;


    return (
        
            <div>
                <h3>Bienvenido a tu perfil</h3>
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
                            <div>
                                <img src={src} alt="..." />
                            </div>
                        </div>
                    </aside>
                <div>
                    <Messages />
                    <ConfigurationDashboard/>
                </div>
                
                        </div>
            </div>
    )
}
