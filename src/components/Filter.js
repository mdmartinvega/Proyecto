import '../styles/Input.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import { API_CITIES } from '../Settings';


export default function Input() {

    const [cities, setCities] = useState([]);
    const [cityTarget, setCityTarget] = useState('');

    useEffect(() => {
        fetch(API_CITIES)
        .then(response => response.json())
        .then(data => setCities(data));  
        }, []);

    let results = cities.filter(function (city) { return city.name === cityTarget; });
    let cityId = (results.length > 0) ? results[0].id : null;

    return (
        // TODO:llevar a los resultados según rol
        <div className="select-city">
                <div className="select-city-single">
                    <div className="autocomplete">
                        <Autocomplete
                            id="input-index"
                            onClick={e => setCityTarget(e.target.innerText)}
                            options = {cities}
                            getOptionLabel = {(option) => option.name}
                            renderInput = {(params) => <TextField {...params} label="¿A dónde te mudas?" variant="outlined" />}
                        />
                    </div>
                </div> 
        </div>
        
    )
}