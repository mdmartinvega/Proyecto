import ProfileCard from '../components/ProfileCard';
import Filter from '../components/Filter';
import { useState, useEffect } from 'react';
import '../styles/Profiles.css';

export default function Profiles() {
    
    const API_PROFILES = 'http://localhost:8000/api/buddies';

    const [profileCards, setProfileCards] = useState([]);

    useEffect(() => {
        fetch(API_PROFILES)
        .then(response => response.json())
        .then(data => setProfileCards(data));  
        }, []);

    return (
        <div className="profiles-page">
            <h1>Encuentra a tu buddy en -Ciudad que hemos puesto en el input- </h1>
            <Filter />
            <div className="container-cards">
                {
                    profileCards.map(profile => {
                        return (
                            <ProfileCard profile={profile} key={profile.id} />
                        )
                    })
                }
            
            </div>
        </div>
    )
}