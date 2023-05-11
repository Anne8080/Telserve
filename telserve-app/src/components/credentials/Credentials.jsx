import React from 'react'
import './credentials.scss'

const Credentials = ({icon, title, det, hr, link}) => {
  return (
    <div className='cred'>
        <div className="df">
            <div className="icon">{icon}</div>
            <div className="details">
                <h2>{title}</h2>
                <p >{det}</p>
                <a href={hr} className='bluebtn credbtn'>{link}</a>
            </div>
        </div>
    </div>
  )
}

export default Credentials