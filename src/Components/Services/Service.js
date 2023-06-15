import React from 'react'

const Service = () => {
  return (
    <>
      <div className='service_container'>
        <div className='service_inner'>
          <h1>Our Services</h1>
          <div className='serviceno1'>
            <div className='no1img'>
              <img src={require("../Models/Cars/img/r.png")} alt="my img" />
            </div>
            <div className='mo1info'>
              <p className='rentalcar'>Welcome you in <b><i>ABPP</i></b> car rental services. we have a various brand cars and we provides all car in rent service in resionable price.
                Our main gola is each and every individual can drive Super cars.
                We can arrange the proposal Setup as well as grand entry in any function or parties.
                Leave your lifes with supper cars.</p>
            </div>
          </div>
          <div className='service2'>
            <div className='service2info'>
              <h3>   We deals with these brands</h3>
              <div className='brand'>
                <div className='brand1'>
<div className='barndinfo'>

</div>
<div className='brandlogo'>
<img src={require("../Models/Cars/img/audil.png")}/>
</div>
                </div>
                <div className='brand2'>
                <div className='brandlogo'>
<img src={require("../Models/Cars/img/mustang.png")}/>
</div>
                </div>
                <div className='brand3'>
                <div className='brandlogo'>
<img src={require("../Models/Cars/img/bmw.png")}/>
</div>

                </div>
                <div className='brand4'>
                <div className='brandlogo'>
<img src={require("../Models/Cars/img/bugati.png")}/>
</div>

                </div>
                <div className='brand5'>
                <div className='brandlogo'>
<img src={require("../Models/Cars/img/mercidies.png")}/>
</div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Service