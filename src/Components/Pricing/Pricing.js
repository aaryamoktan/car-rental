import React, { useState } from 'react'
import { Audi } from '../Models/Cars/audi'
const Pricing = () => {
  const [data,setdata] = useState(200)
  const filter = Audi.filter((ele)=>
  {
    if(ele.price<data)
    {
      return ele.price;
    }
  })

  return (
    <>
      <div className='selection'>
      <div className='input'>
      Minimum Price
      <br></br>
       <input type="range" min="200" max="500" step="100" value={data} onChange={(e)=>
        {
          setdata(e.target.value)
        }
       }/>
       <p>{data}</p></div>
       <div className='selection_container'>
        {filter.map((ele)=>
        {
          const {image,price,name} = ele;
          return(
            <>
            <div className='selection_card'>
            <p className='namep'>
            {name}</p>
            
            <img src={image}/>
            <p>${price}/day</p>
          
          </div>
            </>
          )
        })}
       </div>
      </div>
    </>
  )
}

export default Pricing