import React from 'react'
import './paytab.scss'
import './mobiletab.scss'
import { Link } from 'react-router-dom'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Circlebar from '../circlebar/Circlebar';
import { FaToolbox } from 'react-icons/fa';

const Paytab = ({ plan, amount, writeup, check1, check2, check4, cl, perc, pcol, tcol, features = [] }) => {
  return (
    <div className='paytab p-3 rounded-3' id={cl} >
      <div className="top">
        <h4 >{plan}</h4><br />
        <div style={{ height: '50%', width: '150px', margin: 'auto' }}><Circlebar perc={perc} ratio={0.6} pcol={pcol} tcol={tcol} /></div>
        <p className='text-center px-3'> {writeup}<br /><FaToolbox /> Setup Costs</p>

      </div>
      <div className="linepay"></div>
      <div className="check">
        {
          features.slice(0, 4).map(f => <p className={check1}><CheckBoxOutlinedIcon className='checkbox' />{f}</p>)
        }
        {features.length >= 4 && <p className={check4}><CheckBoxOutlinedIcon className='checkbox' />And So Much more</p>}
      </div>
      <div className="amount">
        <button><span id='naira'>₦</span> {amount} <span>/month</span></button><br />
        <Link to='/subscribe' className="subpay">Subscribe Now</Link>
      </div>
    </div>
  )
}

export default Paytab