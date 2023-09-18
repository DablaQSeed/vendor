import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState('SEED')
    const [num, setnum] = useState(0)
    const [username, setusername] = useState('')
    const changeName = () => {
        setName(username)
    }
    const increment = () => {
        setnum(num + 1)
    }
    const decrement = () => {
        if (num > 0) {
            setnum(num - 1)

        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <input type="text" placeholder='Write Name' onChange={(e) => setusername(e.target.value)} />
            <button onClick={changeName} className='btn bg-dark text-white mt-2'>Change Name</button>
            <h1>{name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <h1>{num}</h1>
                <div>
                    <button onClick={increment} className='btn bg-success text-white fs-6 fw-bolder me-2'>+</button>
                    <button onClick={decrement} className='btn bg-warning text-white fs-6 fw-bolder'>-</button>
                </div>

            </div>
        </div>
    )
}

export default Event