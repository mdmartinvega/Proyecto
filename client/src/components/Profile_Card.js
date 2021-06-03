import '../styles/Profile_Card.css';

export default function Profile({person}) {

    const PHOTO_PERSON = "http://placeimg.com/420/300/people";

    return (
        <div>
            <div className="card">
                <img src={PHOTO_PERSON} alt="..." />
                <div className="description-cardProfile">
                    <div className="name-city">
                        <p className="name">{person.name}</p>
                        <p className="city">{person.city}</p>
                    </div>
                    <div className="languages">
                        {person.languages?.map(language => {
                            return <div> {`${language}`} </div>
                        })
                        }
                    </div>
                    <div className="interests">
                        {person.interests?.map(interest => {
                            return <div> {`${interest}`} </div>
                        })
                        }
                    </div>
                    <p className="other_Details">{person.other_Details}</p>
                    {<button className="btn" /* id={movie.id} onClick={handleClick}*/>+</button> }
                </div>
            </div>
        </div>
    )
}
