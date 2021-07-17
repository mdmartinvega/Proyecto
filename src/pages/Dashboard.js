import Messages from '../components/Messages';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
import '../styles/Dashboard.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PLACEHOLDER_URL } from '../Settings';
import { useAuthContext } from "../context/AuthContext";

export default function Dashboard() {

    const {getToken} = useAuthContext();

    const [profileResults, setProfileResults] = useState([]);

    const headers = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/buddies/me", headers)
        .then(response => response.json())
        .then(data => setProfileResults(data));
        // eslint-disable-next-line
    }, []);


    const src = profileResults.image ? `http://localhost:8000/images/${profileResults.image}` : PLACEHOLDER_URL;

    
    return (
        
            <div className="main-page">
                <h2>Bienvenido a tu perfil {profileResults.name} !</h2>
                <div className="img-dashboard">
                    <img src={src} alt="..." />
                </div>
                <div className="dashboard">
                        <div class="list">
                            
                        </div>
                    <div>
                    <div>
                        <NavLink to="dashboard/messages">Mensajes</NavLink>
                    </div>
                        <Messages />
                        <div>
                        <NavLink to="dashboard/configuration">Configuración</NavLink>
                        </div>

                        <ConfigurationDashboard/>
                    </div>
                
                </div>
            </div>
    )
}
