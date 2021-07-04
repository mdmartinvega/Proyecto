import '../styles/ProfilePage.css';
import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Profile_page() {

    const PHOTO_PERSON = "http://placeimg.com/370/250/people";

    const {id} = useParams();
    const API_PROFILES = `http://localhost:8000/api/buddies/${id}`;

    const [descriptionUser, setDescriptionUser] = useState({});

    useEffect(() => {
        fetch(API_PROFILES)
        .then(response => response.json())
        .then(data => setDescriptionUser(data));  
        }, []);

    //TODO: Hacer un fetch()-GET a un endpoint PROFILE-DETAILS
    //TMDBAPI/FILMS/1225214 <- el ID lo capturas por useParams()
    return (
        
        <div className="profile-page">
            <div className="details-profile">
            </div>
            <div className="image-profile">
                <img src={PHOTO_PERSON} alt="" />
            </div>
            <div className="description-cardProfile">
                <p className="name">{`${descriptionUser.name}, ${descriptionUser.age}`}</p>
                <p className="city">{descriptionUser.city}</p>
                <div className="languages">
                    {descriptionUser.languages?.map(language => {
                        return <div> {`${language}`} </div>
                    })
                    }
                </div>
                <div className="interests">
                    {descriptionUser.interests?.map(interest => {
                        return <div> {`${interest}`} </div>
                    })
                    }
                </div>
                <p className="other_Details">{descriptionUser.bio}</p>
                <Link to={`/ProfilePage/${descriptionUser.id}`} className="btn">Contacta conmigo</Link>
            </div>

        </div>
    )
}
