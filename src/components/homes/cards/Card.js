import React from 'react'
import './Card.scss'
import icon from "../../../img/sprite.svg";
const Card = (props) => {
    return (
        <div className="home">
            <img src={props.image} alt="villa" className="home__img" />
            <svg className="home__like">
                <use xlinkHref={`${icon}#icon-heart-full`} />
            </svg>
            <h5 className="home__name">{props.name}</h5>
            <div className="home__location">
                <svg >
                    <use xlinkHref={`${icon}#icon-map-pin`} />
                </svg>
                <p className="home__text">{props.country}</p>
            </div>
            <div className="home__rooms">
                <svg >
                    <use xlinkHref={`${icon}#icon-profile-male`} />
                </svg>
                <p className="home__text">{props.rooms}</p>
            </div>
            <div className="home__area">
                <svg >
                    <use xlinkHref={`${icon}#icon-expand`} />
                </svg>
                <p className="home__text">{props.area}<sup>2</sup></p>
            </div>
            <div className="home__price">
                <svg >
                    <use xlinkHref={`${icon}#icon-key`} />
                </svg>
                <p className="home__text">&#x20B9; {props.price}</p>
            </div>
            <button className="btn home__btn">Book Now</button>
        </div>
    )
}

export default Card
