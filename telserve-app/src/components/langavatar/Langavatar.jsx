import React from 'react'
import { Avatar, backdropClasses } from '@mui/material'
import './langavatar.scss'

const Langavatar = ({lang, src}) => {
  return (
    <div className='langavatar'>
        <Avatar
            alt="Flag"
            src={src}
            sx={{ width: 20, height: 20 }}
            
            className='flagavatar'
        />
        {lang}
    </div>
  )
}

export default Langavatar