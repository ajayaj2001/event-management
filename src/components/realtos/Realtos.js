import React from 'react'
import './Realtos.scss'
import realtos1 from '../../img/realtor-1.jpeg';
import realtos2 from '../../img/realtor-2.jpeg';
import realtos3 from '../../img/realtor-3.jpeg';
const Realtos = () => {
    return (
        <div className="realtos">
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className="realtos__list">
                <img src={realtos3} alt="realtos1" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">Akashi</h4>
                    <p className="realtos__sold">245 houses sold</p>
                </div>


                <img src={realtos2} alt="realtos2" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">Dia</h4>
                    <p className="realtos__sold">212 houses sold</p>
                </div>


                <img src={realtos1} alt="realtos3" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">Jim</h4>
                    <p className="realtos__sold">198 houses sold</p>
                </div>
            </div>


        </div>
    )
}

export default Realtos
