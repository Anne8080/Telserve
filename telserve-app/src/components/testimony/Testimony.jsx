import React from 'react'
import './testimony.scss'
import { Avatar, backdropClasses } from '@mui/material'

const Testimony = ({pic, word, name, cls}) => {
  return (
    <div className='testimony' id={cls}>
        <Avatar
            alt="Profile picture"
            src={pic}
            sx={{ width: 44, height: 44 }}
            className='profile'
        />
        <div><p className="twords">{word}</p></div>
        <h3 className="name">{name}</h3>
    </div>
  )
}

export default Testimony