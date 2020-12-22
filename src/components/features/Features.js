import React from 'react'
import './Features.scss'
import icon from '../../img/sprite.svg'
const Features = () => {
    return (
        <div className="features">
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-global`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">World's best luxury homes</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur distinctio necessitatibus
                pariatur voluptatibus.</p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-trophy`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">Only the best properties</h4>
                <p className="feature__text">Voluptatum mollitia quae. Vero
                ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-map-pin`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">All homes in in top locations</h4>
                <p className="feature__text">Tenetur distinctio necessitatibus
                 pariatur voluptatibus quidem consequatur harum.</p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-key`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">New home in one week</h4>
                <p className="feature__text">Vero ipsum sapiente molestias
                accusamus rerum. Lorem, ipsum dolor sit amet consectetur
                 adipisicing elit.</p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-presentation`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">Top 1% realtors</h4>
                <p className="feature__text">Quidem consequatur harum,
                voluptatum mollitia quae. Tenetur distinctio necessitatibus
                pariatur voluptatibus.</p>
            </div>
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#icon-lock`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">Secure payments on nexter</h4>
                <p className="feature__text">Pariatur voluptatibus quidem consequatur
                harum, voluptatum mollitia quae..</p>
            </div>
        </div>
    )
}

export default Features
