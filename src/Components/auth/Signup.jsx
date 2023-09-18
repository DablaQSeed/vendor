import React from 'react'
import styles from '../auth/Signup.module.css'
import axios from 'axios'
import  {useState} from 'react'
import { Link,NavLink } from 'react-router-dom'

const Signup = () => {
    let url = 'http://localhost:2000/user/register'
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const register = () => {
    axios.post((url), { firstName, lastName, email, password })
    console.log(firstName,lastName,email,password);
      // .then(results => console.log(results))
      // .catch(err => console.log(err))
  }
    return (
        <div className={styles.mainContainer}>
            <h4 className={styles.header}>Create Account</h4>
            <form action="/signup" method='post' className={styles.form}>
                <input onChange={(e) => setfirstName(e.target.value)}
                    type="text" name='firstName' placeholder='Enter First Name' />
                <input onChange={(e) => setlastName(e.target.value)}
                    type="text" name='lastName' placeholder='Enter Last Name' />
                <input onChange={(e) => setemail(e.target.value)}
                    type="text" name='email' placeholder='Enter Email' />
                <input onChange={(e) => setpassword(e.target.value)}
                    type="text" name='password' placeholder='Enter Password' />
                <button onClick={register}>

                    <NavLink to='/signin'>
                    Sign Up
                    </NavLink>
                </button>
                <Link to='/signin'>Already have an Account? <span>Sign in</span></Link>
            </form>

        </div>
    )
}

export default Signup