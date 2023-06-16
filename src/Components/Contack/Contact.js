import React from 'react'
import { SignS } from './Schema'
import { useFormik } from 'formik'
const Contact = () => {
  const {values,errors,handleBlur,handleChange,handleSubmit,touched}= useFormik(
    {
      initialValues:{
        name:"",
        email:"",
        qusstion:""
      },
      validationSchema:SignS,
      onSubmit:(value)=>
      {
        console.log(value)
      }
    }
  )
  console.log(errors)
  return (
    <>
      <div className='contactContainer'>
        <div className='contactForm'>
        <h2>Contact-Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full-Name:
            </label>
            <br/>
            <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
           <br/><p> {errors.name && touched.name ? errors.name :null}</p>
           <label>
              Email-Id:
            </label><br/>
            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            <br/><p>{errors.email && touched.email ?errors.email:null}</p><label>
            
           
              Question:
            </label><br/>
            <input  className="question" type="text" name="qusstion" value={values.qusstion} onChange={handleChange} onBlur={handleBlur}/>
            <br/><p>{errors.qusstion && touched.qusstion ?errors.qusstion:null}</p>
           <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact