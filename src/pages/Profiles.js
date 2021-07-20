import ProfileCard from '../components/ProfileCard';
import Filter from '../components/Filter';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Profiles.css';


export default function Profiles() {
    // TODO: Hacer otro endpoint segun rol
    const {id} = useParams();
    
    const API_PROFILES = `http://localhost:8000/api/buddies/city/${id}`;

    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        fetch(API_PROFILES)
        .then(response => response.json())
        .then(data => setApiResults(data));
        // eslint-disable-next-line  
        }, []);

    
    let profileCards = apiResults?.results;
    let city = apiResults?.city;
    let total = apiResults.total;

    return  (
        <div className="profiles-page">
            <h1>Encuentra a tu buddy en {city?.name}</h1>
            <Filter />
            <h3>Hemos encontrado un total de {total} buddies en esta ciudad:</h3>
            <div className="container-cards">
                {
                    profileCards?.map(profile => {
                        return (
                            <ProfileCard profile={profile} key={profile.id} />
                        ) 
                    })
                }
            
            </div>
        </div>
    ) 
}