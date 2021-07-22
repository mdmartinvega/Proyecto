import Messages from '../components/Messages';
import ConfigurationDashboard from '../components/ConfigurationDashboard';
import { useState, useEffect } from 'react';
import { PLACEHOLDER_URL, API_ME } from '../Settings';
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
        fetch(API_ME , headers)
        .then(response => response.json())
        .then(data => setProfileResults(data));
        // eslint-disable-next-line
    }, [reload]);

    const src = profileResults?.image ? `http://localhost:8000/images/${profileResults?.image}` : PLACEHOLDER_URL;

    return (
        
        <div className="main-page">
            <h2>Bienvenido a tu perfil {profileResults?.name} !</h2>
            <div className="profile-up">
                <h2>Sobre tí</h2>
                <div className="img-dashboard">
                    <img src={src} alt="..." />
                </div>
                <div className="about-you">
                    <p>{profileResults?.name} {profileResults?.lastName}, {profileResults?.age} años</p>
                    <p>{profileResults?.cityId}</p>
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
                <div>
                    <Messages user={profileResults}/>
                    {profileResults !== undefined ? <ConfigurationDashboard user={profileResults} reload={setReload}/> : <></>}
                </div>
                <div>
                    <DeleteAccount user={profileResults}/>
                </div>
            </div>
        </div>
    )
}
