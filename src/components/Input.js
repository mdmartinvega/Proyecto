import '../styles/Input.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';


export default function Input() {

    const API_CITIES = "http://localhost:8000/api/cities";

    const [profileCards, setProfileCards] = useState([]);

    useEffect(() => {
        fetch(API_CITIES)
        .then(response => response.json())
        .then(data => setProfileCards(data));  
        }, []);

    return (
        <div className="input-search">
            <Autocomplete
                id="input-index"
                options = {profileCards}
                getOptionLabel = {(option) => option.name}
                style = {{ width: 300 }}
                renderInput = {(params) => <TextField {...params} label="¿A dónde viajas?" variant="outlined" />}
            />
            
        </div>
    )
}