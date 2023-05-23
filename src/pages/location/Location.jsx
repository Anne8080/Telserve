import React from 'react'
import './location.scss'
import './mobilelocation.scss'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom' 
import Credentials from '../../components/credentials/Credentials'
import Socials from '../../components/socials/Socials'
import Chat from '../../components/chat/Chat'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Location = () => {
  return (
    <div style={{backgroundColor: '#EBEBEB'}} id='head'>
        <Nav/>
        <div className="light">
            <h1>Feel Free to Reachout to Us<br /></h1>
        </div>
        <div className="df locate">
            <aside>
                <ul>
                    <li><a href="#get">Get In Touch</a></li>
                    <li><a href="#message">Message Us</a></li>
                    <li><a href="#chat">Chat With Us</a></li>
                    <li><a href="#visit">Visit Us</a></li>
                    <li><a href="#socials">Socials</a></li>
                </ul>
            </aside>
            <div className="right">
                <div id="get py-2">
                    <h1>Get In Touch</h1>
                    <div className="line"></div>
                    <p className='p'>Have a littile something, something you want to talk to us about? Well give us a ring, send us an email, or visit us with the details below.</p>
                    <Link to='/subscribe' className="btn btn-primary">Or Subscribe</Link>
                    <div className="df dfget my-2">
                        <Credentials icon=<CallOutlinedIcon style={{fontSize: '3rem'}}/> title='Phone' det='0000 000 0000' hr='#chat' link='Chat'/>
                        <Credentials icon=<AlternateEmailOutlinedIcon style={{fontSize: '3rem'}}/> title='Email' det='info@gmail.com' hr='#message' link='Email'/>
                        <Credentials icon=<LocationOnOutlinedIcon style={{fontSize: '3rem'}}/> title='Address' det='Kado, Abuja' hr='#visit' link='Visit'/>
                    </div>
                </div>
                <div id="message">
                    <h1>Let's Start A Conversation</h1>
                    <div className="line"></div>
                    <p className="p">Need to send a quick mail? Fill the form below...</p>
                    <form action="get">
                        <div className="df">
                            <div className="namediv">
                                <h2>FULL NAME <span>*</span></h2>
                                <input type="text" className="name" required />
                            </div>
                            <div className="maildiv">
                                <h2>EMAIL <span>*</span></h2>
                                <input type="email" className="email" required />
                            </div>
                        </div>
                        <div className="msgdiv">
                            <h2>MESSAGE</h2>
                            <textarea className="message" aria-label="With textarea"></textarea>
                        </div>
                        <Link to='/location' className="bluebtn sendbtn">Send</Link>
                    </form>
                </div>
                <Chat/>
                <div id="visit">
                    <h1>Visit Us</h1>
                    <div className="line"></div> 
                    <p>@Kado, Abuja</p>
                    <div className="map">Map</div>
                </div>
                <div id="socials">
                    <h1>Check Out Our Pages</h1>
                    <div className="line"></div>
                    <div className="df sicons">
                        <Socials icon=<FontAwesomeIcon icon={faFacebook} style={{color: 'var(--bs-primary)', fontSize: '3rem'}} /> app='Facebook' />
                        <Socials icon=<FontAwesomeIcon icon={faTwitterSquare} style={{color: 'var(--bs-primary)', fontSize: '3rem'}} /> app='Twitter' />
                        <Socials icon=<FontAwesomeIcon icon={faLinkedin } style={{color: 'var(--bs-primary)', fontSize: '3rem'}} /> app='LinkedIn'  />
                        <Socials icon=<FontAwesomeIcon icon={faGithub} style={{color: 'var(--bs-primary)', fontSize: '3rem'}} /> app='Github' hlink='https://github.com/Anne8080/Telserve' />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Location