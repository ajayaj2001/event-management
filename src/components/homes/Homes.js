import React from 'react'
import Card from './cards/Card'
import './Homes.scss'
import house1 from '../../img/house-1.jpeg';
import house2 from '../../img/house-2.jpeg';
import house3 from '../../img/house-3.jpeg';
import house4 from '../../img/house-4.jpeg';
import house5 from '../../img/house-5.jpeg';
import house6 from '../../img/house-6.jpeg';
const Homes = () => {
    return (
        <div className="homes">
            <Card image={house1} name={"Beautiful Familiy House"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
            <Card image={house2} name={"Modern Glass Villa"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
            <Card image={house3} name={"Cozy Country House"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
            <Card image={house4} name={"Large Rustical Villa"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
            <Card image={house5} name={"Majestic Palace House"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
            <Card image={house6} name={"Modern Familiy Apartment"} country={"USA"} rooms={"5 rooms"} area={"325 m"} price={"1,200,000"} />
        </div>
    )
}

export default Homes
