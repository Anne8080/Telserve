import React from 'react'
import './info.scss'
import {Link} from 'react-router-dom'

const Info = ({ src,title, word, link}) => {
  return (
    <div className='info'>
        <div className="top"><img src={src} alt="" /></div>
        <div className="bottom">
            <h3 className="title">{title}</h3>
            <p className="words">{word}</p>
            <Link to={link} className='bluebtn'>Learn More</Link>
        </div>
    </div>
  )
}

export default Info