import React from 'react'
import { Cars } from './Cars/Cars';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Model = () => {

  const naviGate = useNavigate();
  return (
    <><div className='modelsContainer'>
      <h3>Cars Models</h3>
      <div className='modelsInfo'>
        {Cars.map((e) => {
          const { models, price, image } = e;
          return (
            <>
              <div className='card'>
                <p>{models}</p>
                <img src={image} alt="my image" />
               <p> <Link to={`/CarD/${models}`} ><button >Explore</button></Link></p>
              </div>
            </>
          )
        })}

      </div>
    </div></>
  )
}

export default Model