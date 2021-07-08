import ProfileCard from '../components/ProfileCard';
import Filter from '../components/Filter';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Profiles.css';

export default function Profiles() {

    const {id} = useParams();
    
    const API_PROFILES = `http://localhost:8000/api/buddies/city/${id}`;

    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        fetch(API_PROFILES)
        .then(response => response.json())
        .then(data => setApiResults(data));  
        }, []);
    
    let profileCards = apiResults?.results;
    let city = apiResults?.city;

    return (
        <div className="profiles-page">
            <h1>Encuentra a tu buddy en {city?.name}</h1>
            <Filter />
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