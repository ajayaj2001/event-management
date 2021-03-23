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
            <Card image={house1} name={"DJ Party's"} country={"INDIA,USA"} rooms={"3000 Min"} area={"1000 m"} price={"60,000 Min"} />
            <Card image={house2} name={"Wedding"} country={"INDIA,USA"} rooms={"800 Min"} area={"500 m"} price={"1,00,000 Min"} />
            <Card image={house3} name={"College Cultural"} country={"INDIA"} rooms={"500 Min"} area={"325 m"} price={"20,000 Min"} />
            <Card image={house4} name={"Workshops / Seminars training"} country={"INDIA"} rooms={"200 Min"} area={"100 m"} price={"10,000 Min"} />
            <Card image={house5} name={"Birthday Celebration"} country={"INDIA,USA"} rooms={"100 Min"} area={"40"} price={"5,000 Min"} />
            <Card image={house6} name={"Festival Celebration"} country={"INDIA"} rooms={"Your Wish"} area={"800 m"} price={"1,00,000 Min"} />
        </div>
    )
}

export default Homes
