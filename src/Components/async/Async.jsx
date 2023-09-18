import axios from 'axios'
import React, {useState} from 'react'


const Async = () => {
  let url = 'http://localhost:2000/user/naHam'
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const fetchApi = () => {
    axios.post((url), { firstName, lastName, email, password })
    console.log(firstName,lastName,email,password);
      // .then(results => console.log(results))
      // .catch(err => console.log(err))
  }

  return (
    <div>
      <form action="/naHam" method='post'>
        <input onChange={(e) => setfirstName(e.target.value)}
          type="text" name='firstName' placeholder='Enter First Name' />
        <input onChange={(e) => setlastName(e.target.value)}
          type="text" name='lastName' placeholder='Enter Last Name' />
        <input onChange={(e) => setemail(e.target.value)}
          type="text" name='email' placeholder='Enter Email' />
        <input onChange={(e) => setpassword(e.target.value)}
          type="text" name='password' placeholder='Enter Password' />
        <button onClick={fetchApi}>FetchApi</button>



      </form>
    </div>
  )
}

export default Async