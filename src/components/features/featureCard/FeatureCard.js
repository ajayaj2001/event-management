import React from 'react'
import './FeatureCard.scss'

import icon from '../../../img/sprite.svg'

const FeatureCard = (props) => {
    return (
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={`${icon}#${props.icon}`} />
                </svg>
                <h4 className="heading-4 heading-4__dark">{props.heading}</h4>
                <p className="feature__text">{props.content}</p>
            </div>
    )
}

export default FeatureCard
