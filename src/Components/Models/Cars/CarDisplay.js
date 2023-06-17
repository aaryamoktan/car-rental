import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Audi } from './audi';
const CarDisplay = ({ Match }) => {
    const params = useParams();
    const filter = Audi.filter((ele) => {
        return ele.models == params.name;
    })
    const [car, setcar] = useState(filter)

    return (
        <>
            <div className='display_container'>
                <div className='display-card'>
                    {
                        car.map((e) => {
                            const { name, image, price,id } = e;
                            return (
                                <>
                                <div className='inner-card'><div className='dcard'>
                                <Link to={`/book/${id}`}><p className='title'>{name}</p>
                                    <img src={image} alt="myimage" />
                                    <p className='price'>${price}/day</p></Link></div> </div></>

                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default CarDisplay