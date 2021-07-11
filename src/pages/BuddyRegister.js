import '../styles/Register.css';
import { useState, useEffect } from 'react';
import { API_CITIES, INTERESTSLIST_URL, LANGUAGESLIST_URL } from '../Settings';
import BuddyRegisterForm from '../components/BuddyRegisterForm';

export default function BuddyRegister({}) {

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
        <BuddyRegisterForm 
            languagesList = {languagesList}
            interestsList = {interestsList}
            cities = {cities}/>
    )
}
