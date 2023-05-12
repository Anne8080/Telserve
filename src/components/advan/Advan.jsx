import React from 'react'
import './advan.scss'

const Advan = ({icon, ad, word}) => {
  return (
    <div className='advan'>
        <div className="top df">
            <div className="icon">{icon}</div>
            <h3>{ad}</h3>
        </div>
        <p>{word}</p>
    </div>
  )
}

export default Advan