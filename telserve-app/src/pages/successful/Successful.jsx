import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './successful.scss'
import {Link} from 'react-router-dom'

const Successful = () => {
  return (
    <div className='successful'>
        <div className='success'>
            <div className="innersuccess">
              <h2>Subscription Successful!</h2>
              <h1>Thank You For Subscribing With Us!</h1>
              <div className="alink"><Link to="/" className="bluebtn a">Go To Home <EastOutlinedIcon id='sucicon' /></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Successful