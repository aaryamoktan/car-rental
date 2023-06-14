import React from 'react'
import Model from '../Models/Model'
import Pricing from '../Pricing/Pricing'
import Service from '../Services/Service'
import Contact from '../Contack/Contact'

const img = require("../../images/app.png")

const Home = () => {
  return (
    <><div className='homeContainer'>
      <div className='homeOurinfo'>
      <img src={require("../../images/gap.jpg")} alt="my image"/>
        <div className='ourcarinfo'>
          <h2><i>Welcome to our car rental service</i></h2>
          <p>We offer you super car in reasionable price</p>
        </div>
      </div>
      <div className='homeCarview'>
        <div className='homeCarview_img'>
        
        </div>
      </div>
    </div>
    <Model/>
    <Pricing/>
    <Service/>
    <Contact/>
   
    </>
  )
}

export default Home