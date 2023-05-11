import React from 'react'
import './socials.scss'

const Socials = ({icon, app, link, hlink}) => {
  return (
    <div className='socialgrp'>
        <div className="socicon"> {icon} </div>
        <a href={hlink} target='blank'> {app} </a>
    </div>
  )
}

export default Socials