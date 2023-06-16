import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contactContainer'>
        <div className='contactForm'>
        <h2>Contact-Form</h2>
          <form>
            <label>
              Full-Name:
            </label>
            <br/>
            <input type="text" name="name" value=""/>
           <br/> <label>
              Email-Id:
            </label><br/>
            <input type="text" name="name" value=""/>
            <br/> <label>
              Question:
            </label><br/>
            <input  className="question" type="text" name="name" value=""/>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact