import React, { useState } from 'react'
import './faq.scss'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {Link} from 'react-router-dom'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const data = [
  {
    question: 'How to register on Telserve?',
    answer: '1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.'
  },
  {
    question: 'What is dedicated Internet?',
    answer: '1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.'
  },
  {
    question: 'How to restart the modem?',
    answer: '1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.'
  },
  {
    question: 'How to pay for internet with myTelserve?',
    answer: '1. Unplug the power and Ethernet cables from the modem. Some modems have backup batteries that need to be removed too. 2. Wait 2-3 minutes for the modem to fully power off. All the lights on the modem should be off. 3. Reconnect the power and Ethernet cables to the modem. 4. Wait for the Ethernet light to turn solid, then check if the internet is working properly.'
  }
]

const Faq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className='faqdiv'>
      <h1>Frequently Asked Questions <Link to="/help"><LiveHelpOutlinedIcon className='icon'/></Link> </h1>
      {data.map((item, i)=>(
        <div className="item">
          <div className={selected === i ? 'title df show' : 'title df'} onClick={() => toggle(i)}>
            <div className="iconfaq"><QuestionAnswerOutlinedIcon/></div>
            <h2>{item.question}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default Faq