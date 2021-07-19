import Messages from '../components/Messages';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
import '../styles/Dashboard.css';
import { useState, useEffect } from 'react';
import { PLACEHOLDER_URL } from '../Settings';
import { useAuthContext } from "../context/AuthContext";
import DeleteAccount from '../components/DeleteAccount';

export default function Dashboard() {

    const {getToken} = useAuthContext();

    const [profileResults, setProfileResults] = useState();
    const [reload, setReload] = useState(true);


    const headers = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/buddies/me", headers)
        .then(response => response.json())
        .then(data => setProfileResults(data));
        // eslint-disable-next-line
    }, [reload]);

    const src = profileResults?.image ? `http://localhost:8000/images/${profileResults?.image}` : PLACEHOLDER_URL;

    return (
        
            <div className="main-page">
                <h2>Bienvenido a tu perfil {profileResults?.name} !</h2>
                <div className="profile">
                <h2>Sobre tí</h2>
                <div className="img-dashboard">
                    <img src={src} alt="..." />
                </div>
                <div className="About-you">
                    <p>{profileResults?.name} {profileResults?.lastName}</p>
                    <p>{profileResults?.cityId}</p>
                    <p>{profileResults?.age} años</p>
                    <p>{profileResults?.bio}</p>
                    {/* <div className="languages-2">
                        {profileResults?.languages?.map(language => {
                            return <div> {`${language?.name}`} </div>
                        })
                        }
                    </div>
                    <div className="interests-2">
                        {profileResults?.interests?.map(interest => {
                            return <div> {`${interest?.tag}`} </div>
                        })
                        }
                    </div> */}
                </div>
                </div>
                <div className="dashboard">
                        <div class="list">
                            
                        </div>
                    <div>
                        <Messages />
                        {profileResults !== undefined ? <ConfigurationDashboard user={profileResults} reload={setReload}/> : <></>}
                    </div>
                    <div>
                        <DeleteAccount user={profileResults}/>
                    </div>
                    
                
                </div>
            </div>
    )
}
