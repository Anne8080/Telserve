import React from 'react'
import './servicecard.scss'

const Servicecard = ({clasn, icon, title, para}) => {
  return (
    <div className={clasn}>
        <div className='serveicon'>{icon}</div>
        <h3>{title}</h3>
        <p>{para}</p>
    </div>
  )
}

export default Servicecard