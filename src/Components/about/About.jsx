import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {id} = useParams()
  return (
    <div>Welcome to About {id}</div>
  )
}

export default About