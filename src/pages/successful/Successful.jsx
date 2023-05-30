import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './successful.scss'
import {Link} from 'react-router-dom'

const Successful = () => {
  return (
    <div className='successful'>
        <div className='success shadow'>
            <div className="innersuccess">
              {/* <h2>Subscription Successful!</h2> */}
              <h1>Thank You For Subscribing With Us!</h1>
              <h4>You will Be contacted in less than 3 Hours by our sales team</h4>
              <div className="alink"><Link to="/" className="bluebtn a">Go To Home <EastOutlinedIcon id='sucicon' /></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Successful