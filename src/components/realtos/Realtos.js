import React from 'react'
import './Realtos.scss'
import realtos1 from '../../img/college-1.png';
import realtos2 from '../../img/college-2.png';
import realtos3 from '../../img/college-3.png';
const Realtos = () => {
    return (
        <div className="realtos">
            <h3 className="heading-3">Top 3 Colleges</h3>
            <div className="realtos__list">
                <img src={realtos3} alt="realtos1" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">PSG cet</h4>
                    <p className="realtos__sold">114 Events</p>
                </div>


                <img src={realtos2} alt="realtos2" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">NIT Trichy</h4>
                    <p className="realtos__sold">96 Events</p>
                </div>


                <img src={realtos1} alt="realtos3" className="realtos__img" />
                <div className="realtos__details">
                    <h4 className="heading-4 heading-4__light">IIT Goa</h4>
                    <p className="realtos__sold">86 Events</p>
                </div>
            </div>


        </div>
    )
}

export default Realtos
