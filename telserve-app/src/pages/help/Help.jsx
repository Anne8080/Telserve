import React from 'react'
import './help.scss'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Faq from '../../components/faq/Faq'
import Chat from '../../components/chat/Chat'
import {Link} from 'react-router-dom'
import mark from '../../pics/kisspng-desktop-wallpaper-computer-icons-question-mark-cli-question-marks-5ace4265dbc786.8889523015234668539002.png'

const Help = () => {
  return (
    <div style={{backgroundColor: '#EBEBEB', overflow: 'hidden'}} id='head'>
        <Nav/>
        <Chat/>
        <Faq/>
        <div className="more">
          <img src={mark} alt="" />
            <h1>Still Have More Questions?</h1>
            <h3>How About You Give Us a Call Or Leave a Message?</h3>
            <Link to="/location" className="bluebtn">Contact Us Today</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Help