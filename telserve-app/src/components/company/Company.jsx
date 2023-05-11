import React from 'react'
import './company.scss'
import amp from '../../pics/amplitude.png'
import net from '../../pics/netflix.png'
import goo from '../../pics/google.png'
import twi from '../../pics/twitch.png'
import you from '../../pics/youtube.png'
import spo from '../../pics/spotify.png'

const Company = () => {
  return (
    <div className='company'>
        <img src={amp} alt="" />
        <img src={net} alt="" />
        <img src={goo} alt="" />
        <img src={twi} alt="" />
        <img src={you} alt="" />
        <img src={spo} alt="" />
    </div>
  )
}

export default Company