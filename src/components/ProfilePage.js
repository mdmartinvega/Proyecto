import '../styles/ProfilePage.css';
import { Link, useParams } from 'react-router-dom';
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

    return (
        
        <div className="profile-page">
            <div className="image-profile-user">
                <img src={PHOTO_PERSON} alt="" />
            </div>
            <div>
                <p className="name-user">{`${descriptionUser.name}, ${descriptionUser.age}`}</p>
                <p className="years-living-user">Llevo viviendo en {descriptionUser.cityId}: {descriptionUser.yearsLiving} años</p>
                <p className="city-user">{descriptionUser.cityId}</p>
            </div>
            <div className="description-cardProfile-user">
                <div className="languages">
                    {descriptionUser.languages?.map(language => {
                        return <div> {`${language}`} </div>
                    })
                    }
                </div>
                <div className="languages">
                    {descriptionUser.interests?.map(interest => {
                        return <div> {`${interest}`} </div>
                    })
                    }
                </div>
                <p className="other_Details-user">{descriptionUser.bio}</p>
                {/*TODO: Crear página de contacto */}
                <Link to={`/ProfilePage/${descriptionUser.id}`} className="btn">Contacta conmigo</Link>
            </div>

        </div>
    )
}
