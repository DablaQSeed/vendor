import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
const Formik = () => {
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values);
            axios.post(url,)
        },
        validate:(values)=>{
            let errors = {}
            if(!values.firstName){
                errors.firstName='first name required'
            }
            if(!values.lastNameName){
                errors.lastName='last name required'
            }
            if(!values.email){
                errors.email='Email Require'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password= 'Required'
              }
              return errors
        }
    })
    // console.log(formik);
    
    
  return (
    <div>
        <form style={{display:'grid',alignItems:'center',justifyContent:'center',marginTop:'50px'}}
        onSubmit={formik.handleSubmit}>
            <input name='firstName'placeholder='firstName'className='mb-2 form-control' 
            type="text" onChange={formik.handleChange} />
            <span>{formik.errors.firstName}</span>
            <input name='lastName' placeholder='lastName'className='mb-2 form-control'
            type="text" onChange={formik.handleChange}/>
            <span>{formik.errors.lastNameName}</span>
            <input name='email' placeholder='email'className='mb-2 form-control'
            type="text" onChange={formik.handleChange}/>
            <span>{formik.errors.email}</span>
            <input name='password' placeholder='password'className='mb-2 form-control'
            type="text" onChange={formik.handleChange}/>
            <span>{formik.errors.password}</span>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formik