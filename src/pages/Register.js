import '../styles/Register.css';
import { useState, useEffect } from 'react';
import { API_PROFILES, INTERESTSLIST_URL, LANGUAGESLIST_URL } from '../Settings';
import RegisterForm from '../components/RegisterForm';

export default function Register({}) {

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

    

    return (
        <RegisterForm 
            languagesList = {languagesList}
            interestsList = {interestsList}/>
    )
}
