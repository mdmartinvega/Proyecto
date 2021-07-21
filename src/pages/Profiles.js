import ProfileCard from '../components/ProfileCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_PROFILES_BY_CITY } from '../Settings';


export default function Profiles() {
    const {id} = useParams();
    

    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        fetch(API_PROFILES_BY_CITY + `${id}`)
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
            {total > 1 ? <h3>Hemos encontrado un total de {total} personas en esta ciudad:</h3>
            : <h3>De momento sólo hay una persona en esta ciudad, contácta con ella!</h3>}
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