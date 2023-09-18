import React from 'react'
import styles from '../auth/Signup.module.css'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Signin = () => {
    const navigate = useNavigate()
    let url = 'http://localhost:2000/user/signin'

    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const register = () => {
        axios.post((url), { email, password })
        // console.log(email, password);
        .then((response)=>{
            if (response.data.status) {
                navigate('/dashboard')
            }else{
                console.log('No user found');
            }
        })
    }
    <Navbar />

    return (
        <div className={styles.mainContainer}>
            <h4 className={styles.header}>Sign In</h4>
            <form action="/signin" method='post' className={styles.form}>

                <input onChange={(e) => setemail(e.target.value)}
                    type="text" name='email' placeholder='Enter Email' />
                <input onChange={(e) => setpassword(e.target.value)}
                    type="text" name='password' placeholder='Enter Password' />
                <button onClick={register}>
                    Sign In
                </button>
                <Link to='/signup'>Don't have an Account? <span>Sign Up</span></Link>
            </form>

        </div>




    )
}

export default Signin