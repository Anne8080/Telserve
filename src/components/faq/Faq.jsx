import React, { useState } from 'react'
import './faq.scss'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {Link} from 'react-router-dom'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const data = [
  {
    question: 'How to register on Telserve?',
    answer: 'Easy By Contacting us via mail on info@telservnet.com or calling any of our phone numbers, or you can access various plans by clicking on service plans to the Navigation bar and choose either Lagos or Abuja Plans to get started'
  },
  {
    question: 'Whats the difference between dedicated and shared internet?',
    answer: ' the key difference between dedicated and shared internet lies in the level of exclusivity and control over the bandwidth. Dedicated Internet provides dedicated and guaranteed bandwidth to a single user or organization, offering consistent performance and high-speed access. On the other hand, shared internet divides the available bandwidth among multiple users, resulting in potential fluctuations in speed and performance depending on network congestion and the number of concurrent users.'
  },
  {
    question: 'Are there any data caps or limits on your internet plans?',
    answer: 'We offer unlimited data on ALL of our internet plans. This means that you can use the internet without worrying about data caps or limits.'
  },
  {
    question: 'What additional features or services do you offer with your internet plans?',
    answer: 'We Do offer a CRM(Customer Relational Management) Software as well as an entire PMS(Process management Software). and an automated billing System will be available soon.'
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
            <h4>{item.question}</h4>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default Faq