import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom'
import { Audi } from './audi';
import { useNavigate } from 'react-router-dom';
const Book = () => {
  const Navigation = useNavigate()
  const params = useParams();

  const filter = Audi.filter((ele)=>
  {
    
    return ele.id == params.id;
    
  })
const [book,setbook] = useState(filter);
const [change,setchange] = useState()
const [date,setdate]=useState();
const [name,Setname] = useState();
const [id,setid] = useState();
const sendemail = (e)=>
{
e.preventDefault()
alert("sucsufully booked")
Navigation("/service");

emailjs.sendForm('2818303M4', 'template_lo1seq9', e.target, '8ONo3BowBtapairW8')

emailjs.sendForm('2818303M4', 'template_sdz7fx3', e.target, '8ONo3BowBtapairW8')


}
  return (
    <div className='BookContainer'>
    <div className='Bookform'>
        <div className='Book_Carinfo'>
        {book.map((ele)=>
        {
          const {models,price,image,name} = ele;
          
          return(
            <>
            <p>{models}: {name}</p>
            <img src={image} alt="myimg"/>
            <p className='price'>${price}/day</p>
            </>
          )  
        })}

        </div>
        <div className='Booking_details'>
            <form onSubmit={sendemail}>
            <label>Your-Name</label>
            <br/>
                <input type='text' name="name" placeholder="" onChange={(e)=>
                {
                  Setname(e.target.value)
                }} required/>
                <br/>
                <label>Email</label>
            <br/>
                <input type='email' name="email" placeholder="" onChange={(e)=>
                {
                  setid(e.target.value)
                }} required/>
                <br/>
                <label>Date to Book</label>
            <br/>
                <input type='date' placeholder="" name="date" required onChange={(e)=>
                {
                  setdate(e.target.value)
                }}/>
                <br/>
                <label>No. Of Days</label>
            <br/>
                <input type='number' name="days" required  value={change} onChange={(e)=>
                {
                  setchange(e.target.value)
                }} placeholder=""/>
                <br/>
                <label>Price</label>
            <br/>
            {book.map((e)=> 
            {
              var pp = change * e.price
              return(
                <>
                 <p >${pp}</p>
                </>
              )
            })}
                
                <button type='submit' >Submit</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Book