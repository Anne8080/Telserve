import React from 'react'
import './chose.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const Chose = ({choice, type, users, cardtype, amount, src, deta, detai, detail, totalchose}) => {
    
  return (
    <div className={choice} onClick={()=>totalchose(amount)} >
        <div className='df top'>
            <div className="name df">
                <div className="cicon"></div>
                <div className='ctitle'>
                    <h3>{type}</h3>
                    <p className='plan'>{users}</p>
                    <p className='pay'>{cardtype}</p>
                </div>
            </div>
            <div>
                <p className='plan amount'><span>N</span>{amount} <span>/month</span></p>
                <div className="pay"><img src={src} alt="" /></div>
            </div>
        </div>
        <div className="plan drop">
            <p className={deta}><CheckBoxOutlinedIcon className='dicon'/>Internet Unlimited</p>
            <p className={detai}><CheckBoxOutlinedIcon className='dicon'/>10GB Storage Capacity</p>
            <p className={detail}><CheckBoxOutlinedIcon className='dicon'/>More than 100 terminals</p>
        </div>
        <div className="pay pdrop">
            <form action="get">
                <div className="df">
                    <div className="namediv">
                        <div className="left">
                        <h2>numbers <span>*</span></h2>
                        <input type='text' className="num" placeholder='0000 0000 0000 0000' required />
                        </div>
                        <div className="left">
                        <h2>csv <span>*</span></h2>
                        <input type='text' className="csv" placeholder='000' required />
                        </div>
                    </div>
                    <div className="maildiv">
                        <h2>Period <span>*</span></h2>
                        <input type="text" className="period" placeholder='00/00' required />
                    </div>
                </div>
                <div className="check">
                    <p className="verified">Eren Jeager</p>
                    <p className="wrong">Wrong Details</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Chose