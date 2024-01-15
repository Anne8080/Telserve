import React from 'react'
import './footer.scss'
import './mobilefooter.scss'
import { Link } from 'react-router-dom'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState,} from 'react'
import logo from "../../assets/telserve_logo.png"



const Footer = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 150) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <div className='footer'>
            <div className="df foot">
                <div className='linkdivs'>
                    <img src={logo} alt="Telserve Networks" className='logo' />
                </div>
                <div className='linkdivs'>
                    <div className="innerlinkdivs">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/lagos-plans">Package</Link></li>
                            <li><Link to="/services-new">Service</Link></li>
                            {/* <li><Link to="/help">Help</Link></li> */}
                            <li><Link to="/location">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='linkdivs'>
                    <div className="innerlinkdivs">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to="/services-new">Serviced</Link></li>
                            <li><Link to="/location">Contact Us</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='linkdivs'>
                    <div className="innerlinkdivs">
                        <h3>Talk to Us</h3>
                        <ul>
                            <li>info@telservenet.com</li>
                            <li>+234 01 295 3548, 08105162231</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fline"></div>
            <div className="df">
                <div className="df socials"></div>
                <p>{new Date().getFullYear()} All Rights Reserved </p>
            </div>
            <a href="#head" className={color ? 'totop totopd' : 'totop'} ><KeyboardArrowUpRoundedIcon /></a>
        </div>
    )
}

export default Footer