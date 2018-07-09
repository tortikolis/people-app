import React from 'react';

export const SinglePerson = (props) => {
    const { name, email, dob, picture, gender } = props.user;

    return (
        <li className={gender === "female" ? "collection-item avatar red lighten-5" : "collection-item avatar"}>
            <img src={picture.thumbnail} alt="" className="circle" />
                <span className="title">{`${name.first[0].toUpperCase()}${name.first.slice(1)}`} {`${name.last[0].toUpperCase()}${name.last.slice(1)}`}</span>
                <p><i className="material-icons">email</i>email:{email}</p>
                <p><i className="material-icons">cake</i>{dob}</p>
        </li>

    )
}