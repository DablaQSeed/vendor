import React from 'react'

const Button = ({style,name,color}) => {
  return (
    <div>
        <button className={style}>{name}</button>
    </div>
  )
}

export default Button