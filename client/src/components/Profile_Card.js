

export default function Profile({person}) {

    const PHOTO_PERSON = "http://placeimg.com/450/300/people";

    return (
        <div>
            <div className="card">
                <img src={PHOTO_PERSON} alt="..." />
                <p className="name">{person.name}</p>
                <p className="age">{person.age}</p>
                <p className="city">{person.city}</p>
                <p className="languages">{person.languages}</p>
                <p className="interests">{person.interests}</p>
                <p className="other_Details">{person.other_Details}</p>
                {/* <button className="btn" id={movie.id} onClick={handleClick}>+</button> */}
            </div>
        </div>
    )
}
