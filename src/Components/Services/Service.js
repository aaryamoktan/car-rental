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
                    <p>
                      The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.

                      To play an instrumental role in shaping the transformation as we head into a new age of mobility the Company is implementing its strategy step by step.</p>
                  </div>
                  <div className='brandlogo'>
                    <img src={require("../Models/Cars/img/audil.png")} />
                  </div>
                </div>
                <div className='brand1'>

                  <div className='brandlogo'>
                    <img src={require("../Models/Cars/img/mustang.png")} />
                  </div>
                  <div className='barndinfo'>
                    <p>The Petrol engine is 4951 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Mustang has a mileage of 13.0 kmpl & Ground clearance of Mustang is 137mm. The Mustang is a 4 seater 8 cylinder car and has length of 4784mm, width of 2080mm and a wheelbase of 2720mm.</p>
                  </div>
                </div>
                <div className='brand1'>
                  <div className='barndinfo'>
                    <p>Munich, German München, city, capital of Bavaria Land (state), southern Germany. It is Bavaria’s largest city and the third largest city in Germany (after Berlin and Hamburg). Munich, by far the largest city in southern Germany, lies about 30 miles (50 km) north of the edge of the Alps and along the Isar River, which flows through the middle of the city. Pop. (2011) 1,348,335; (2021 est.) 1,487,708.</p>
                  </div>
                  <div className='brandlogo'>
                    <img src={require("../Models/Cars/img/bmw.png")} />
                  </div>
                </div>
                <div className='brand1'>

                  <div className='brandlogo'>
                    <img src={require("../Models/Cars/img/bugati.png")} />
                  </div>
                  <div className='barndinfo'>
                    <p>Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles. The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born industrial designer Ettore Bugatti. The cars were known for their design beauty and for their many race victories.</p>
                  </div>
                </div>
                <div className='brand1'>
                  <div className='barndinfo'>
                    <p>The history of AUDI AG extends back to the 19th century. Find out more about the great personalities from the company’s 100-plus years of history. Learn about the fascinating evolution of the various models and major milestones in the fields of car manufacturing, motorcycle, engine production and motor racing.</p>
                  </div>
                  <div className='brandlogo'>
                    <img src={require("../Models/Cars/img/mercidies.png")} />
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