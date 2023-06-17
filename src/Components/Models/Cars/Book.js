import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Audi } from './audi';
import { FALSE } from 'sass';
const Book = () => {
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

console.log(book)
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
            <form>
            <label>Your-Name</label>
            <br/>
                <input type='text' placeholder="" onChange={(e)=>
                {
                  Setname(e.target.value)
                }} required/>
                <br/>
                <label>Id-Number</label>
            <br/>
                <input type='text' placeholder="" onChange={(e)=>
                {
                  setid(e.target.value)
                }} required/>
                <br/>
                <label>Date to Book</label>
            <br/>
                <input type='date' placeholder="" required onChange={(e)=>
                {
                  setdate(e.target.value)
                }}/>
                <br/>
                <label>No. Of Days</label>
            <br/>
                <input type='number' required  value={change} onChange={(e)=>
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
                 <p>${pp}</p>
                </>
              )
            })}
                
                <button type='submit'  >Submit</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Book