import React from 'react'
import './StoryPicture.scss'
import image1 from '../../img/story-1.jpeg'
import image2 from '../../img/story-2.jpeg'
const StoryPicture = () => {
    return (
        <div className="storyPicture">
            <img src={image1} alt="beach house" className="storyPicture__img-1" />
            <img src={image2} alt="new house" className="storyPicture__img-2" />
        </div>
    )
}

export default StoryPicture

