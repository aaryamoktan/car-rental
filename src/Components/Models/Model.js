import React from 'react'
import { Cars } from './Cars/Cars';
const Model = () => {
  return (
    <><div className='modelsContainer'>
    <h3>Cars Models</h3>
      <div className='modelsInfo'>
        {Cars.map((e) => {
          const {models,price,image} = e;
          return (
 <>
  <div className='card'>
    <p>{models}</p>
    <img src={image} alt="my image"/>
    
  </div>
 </>
          )
        })}

        </div>
    </div></>
  )
}

export default Model