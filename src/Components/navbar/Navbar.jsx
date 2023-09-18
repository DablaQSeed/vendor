import React from 'react'
import styles from '../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class={styles.navbar}>
          
        <a href="#">SEED <span><i class="bi bi-stars"></i></span></a>
        <div className={styles.list}>
           <Link>Home</Link>
           <Link>Contact Us</Link>
           <Link to='/signin'>Login</Link>
           <Link to='/signup'>Create An Account</Link>

        </div>
    </nav>
    </div>
  )
}

export default Navbar