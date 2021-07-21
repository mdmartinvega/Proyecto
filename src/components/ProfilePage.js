import { Link, useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PLACEHOLDER_URL, API_PROFILES } from '../Settings';
import { useAuthContext } from "../context/AuthContext";


export default function Profile_page() {

    const {id} = useParams();
    const {isAuthenticated} = useAuthContext();

    const [descriptionUser, setDescriptionUser] = useState({});

    useEffect(() => {
        fetch(API_PROFILES + `${id}`)
        .then(response => response.json())
        .then(data => setDescriptionUser(data));  
        // eslint-disable-next-line
        }, []);

    const src = descriptionUser.image ? `http://localhost:8000/images/${descriptionUser.image}` : PLACEHOLDER_URL;

    return isAuthenticated ? (
        
        <div className="profile-page">  
            <div className="infoUser">
                <div className="image-profile-user">
                    <img src={src} alt="" />
                    <p className="name-user">{`${descriptionUser.name}, ${descriptionUser.age}`}</p>
                    <p className="city-user">{descriptionUser.cityId}</p>
                </div>
                <div className="info-profile-user">
                    <p className="years-living-user">Llevo viviendo en {descriptionUser.cityId}: {descriptionUser.yearsLiving} años</p>
                    <p className="other_Details-user">{descriptionUser.bio}</p>
                    <div className="description-cardProfile-user">
                        <div className="languages">
                            {descriptionUser.languages?.map(language => {
                                return <div> {`${language.name}`} </div>
                            })
                            }
                        </div>
                        <div className="interests">
                            {descriptionUser.interests?.map(interest => {
                                return <div> {`${interest.tag}`} </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="link-to-contact">
                <Link to={`/contact/${id}`} className="btn" key={descriptionUser.id}>Contacta conmigo</Link>
            </div>
        </div>
    ) : <Redirect to="/login" />
}
