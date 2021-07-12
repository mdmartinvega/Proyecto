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
        // eslint-disable-next-line
        }, []);

    return (
        
        <div className="profile-page">
            <div className="infoUser">
                <div className="image-profile-user">
                    <img src={PHOTO_PERSON} alt="" />
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
                <Link to="/contact" className="btn">Contacta conmigo</Link>
            </div>
            

        </div>
    )
}
