import { useState, useEffect } from 'react';
import { API_CITIES, INTERESTSLIST_URL, LANGUAGESLIST_URL } from '../Settings';
import UserRegisterForm from '../components/UserRegisterForm';

// eslint-disable-next-line
export default function UserRegister({}) {

    const [interestsList, setInterestsList] = useState([]);
    useEffect(() => {
        fetch(INTERESTSLIST_URL)
        .then(response => response.json())
        .then(data => setInterestsList(data));  
        }, []);

        
    const [languagesList, setLanguagesList] = useState([]);
    useEffect(() => {
        fetch(LANGUAGESLIST_URL)
        .then(response => response.json())
        .then(data => setLanguagesList(data));  
        }, []);

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch(API_CITIES)
        .then(response => response.json())
        .then(data => setCities(data));  
        }, []);

    return (
        <UserRegisterForm 
            languagesList = {languagesList}
            interestsList = {interestsList}
            cities = {cities}/>
    )
}
