import React from 'react'
import './chooseus.scss'

const Chooseus = ({icon, title, write, clas}) => {
  return (
    <div className={clas} >
        <p>{icon}</p>
        <h3>{title}</h3>
        <p className='write'>{write}</p>
    </div>
  )
}

export default Chooseus