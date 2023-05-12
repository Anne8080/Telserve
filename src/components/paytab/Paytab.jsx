import React from 'react'
import './paytab.scss'
import './mobiletab.scss'
import {Link} from 'react-router-dom'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Circlebar from '../circlebar/Circlebar';

const Paytab = ({plan, amount, writeup, check1, check2, check4, cl, perc, pcol, tcol}) => {
  return (
    <div className='paytab' id={cl} >
        <div className="top">
            <h4 >{plan}</h4><br />
            <div style={{height: '50%', width: '150px', margin: 'auto'}}><Circlebar perc={perc} ratio={0.6} pcol={pcol} tcol={tcol}/></div>
            <p> {writeup} <span>/month</span> </p>
            
        </div>
        <div className="linepay"></div>
        <div className="check">
            <p className={check1}><CheckBoxOutlinedIcon className='checkbox' /> Internet Unlimited</p>
            <p className={check2}><CheckBoxOutlinedIcon className='checkbox'/> 10GB storage capacity</p>
            <p className={check4}><CheckBoxOutlinedIcon className='checkbox'/> More than 100 terminals</p>
        </div>
        <div className="amount">
          <button><span id='naira'>N</span> {amount} <span>/month</span></button><br />
          <Link to='/subscribe' className="subpay">Subscribe Now</Link>
        </div>
    </div>
  )
}

export default Paytab