import React from "react";

export const SinglePersonGrid = (props) => {
    const { name, email, dob, picture, gender } = props.user;

    return (
  
            <div className="col s4 m4 l4 xl4">
                <div className={gender === "female" ? "card red lighten-5" : "card"}>
                    <div className="card-image">
                        <img src={picture.large} alt="user"/>
                        <span className="card-title">{`${name.first[0].toUpperCase()}${name.first.slice(1)}`}</span>
                    </div>
                    <div className="card-content">
                        <p>{email}</p>
                        <p>Birth date: {dob} </p>
                    </div>
                </div>
            </div>


    )
}


