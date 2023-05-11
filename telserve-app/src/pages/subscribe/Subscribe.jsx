import React, {useState} from 'react'
import './subscribe.scss'
import './mobilesubscribe.scss'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Accordition from '../../components/accordition/Accordition';
import Selectplan from '../../components/selectplan/Selectplan';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Subscribe = () => {
  const [total, setTotal] = useState('0')

    const totalfunc = (i) =>{
    //   if (selected === i){
    //     return setSelected(null)
    //   }
      setTotal(i)
    }
  return (
    <div className='subscribepg df'>
        <div className="subleft">
          <Link to="/"><KeyboardArrowLeftRoundedIcon id='back'/></Link>
          <div className="content">
            
            <motion.h1 initial={{ x: -200}} animate={{ x: 0 }} transition={{duration: 1.2, type: 'spring'}} >Subscribe <EastOutlinedIcon id="subarrow" /></motion.h1>
            <ul>
                <motion.li initial={{ x: -200}} animate={{ x: 0 }} transition={{delay: 0.2,duration: 1.2, type: 'spring'}}><a href="#credentials">Fill in your Details</a></motion.li>
                <motion.li initial={{ x: -200}} animate={{ x: 0 }} transition={{delay: 0.4,duration: 1.2, type: 'spring'}}><a href="#plan">Select a Plan</a></motion.li>
                <motion.li initial={{ x: -200}} animate={{ x: 0 }} transition={{delay: 0.6,duration: 1.2, type: 'spring'}}><a href="#method">Payment Method</a></motion.li>
                <motion.li initial={{ x: -200}} animate={{ x: 0 }} transition={{delay: 0.8,duration: 1.2, type: 'spring'}}><a href="#subscribe">Subscribe</a></motion.li>
            </ul>
          </div>
        </div>
        <div className="subright">
          <div className="rightinner">
            <div id="credentials">
              <div className="title">
                <h1>Fill in your Details</h1>
                <div className="line"></div>
              </div>
              <form action="get">
                  <div className="df">
                      <div className="namediv">
                          <div className="left">
                            <h2>First Name <span>*</span></h2>
                            <input type='text' className="num" placeholder='Eren' required />
                          </div>
                          <div className="left">
                            <h2>Last Name <span>*</span></h2>
                            <input type="text" className="period" placeholder='Jeager' required />
                          </div>
                      </div>
                      <div className="maildiv">
                          <div className="left">
                            <h2>Email <span>*</span></h2>
                            <input type='email' className="csv" placeholder='info@gmail.com' required />
                          </div>
                          
                          <div className="left">
                            <h2>Phone Number <span>*</span></h2>
                            <input type='tel' className="phone" placeholder='+234 000 000 0000' required />
                          </div>
                      </div>
                  </div>
                  <div className="msgdiv">
                      <h2>Address</h2>
                      <textarea className="address" rows='2' aria-label="With textarea"></textarea>
                  </div>
              </form>
            </div>
            <div id='plan' className='parts'>
              <div className="title">
                <h1>Select a Plan</h1>
                <div className="line"></div>
              </div>
              <Selectplan totalselct={totalfunc} />
            </div>
            
            <div id='method' className='parts' >
              <div className="title">
                  <h1>Select a Payment Method</h1>
                  <div className="line"></div>
              </div>
              <Accordition name='pay' />
              
            </div>

            <div id="subscribe">
              <div className="title">
                  <h1>Subcribe</h1>
                  <div className="line"></div>
              </div>
              <div className="total df">
                <div className="left">
                  <h3>Total</h3>
                  <p>Due on 9 May, 2023</p>
                </div>
                <div className="right">
                  <h1><span>N</span>{total}</h1>
                </div>
              </div>
              <a href="/successful" className="bluebtn">Subscribe</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Subscribe