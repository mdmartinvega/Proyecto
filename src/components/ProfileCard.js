import {Link} from 'react-router-dom';

import '../styles/ProfileCard.css';

export default function Profile({profile}) {

    const PHOTO_PERSON = "http://placeimg.com/370/250/people";

    return (
        <div>
            <div className="card">
                <img src={PHOTO_PERSON} alt="..." />
                <div className="description-cardProfile">
                    <p className="name">{`${profile.name}, ${profile.age}`}</p>
                    <p className="city">{profile.city}</p>
                    <div className="languages">
                        {profile.languages?.map(language => {
                            return <div> {`${language}`} </div>
                        })
                        }
                    </div>
                    <div className="interests">
                        {profile.interests?.map(interest => {
                            return <div> {`${interest}`} </div>
                        })
                        }
                    </div>
                    <p className="other_Details">{profile.bio}</p>
                    <Link to={`/profilePage/${profile.id}`} className="btn">Descubre más</Link>
                </div>
            </div>
        </div>
    )
}
