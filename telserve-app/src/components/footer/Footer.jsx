import React from 'react'
import './footer.scss'
import './mobilefooter.scss'
import {Link} from 'react-router-dom'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState, useEffect } from 'react'



const Footer = () => {
    const [color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 150) {
			setColor(true)
		} else {
			setColor(false)
		}
	}
	window.addEventListener ('scroll', changeColor)
  return (
    <div className='footer'>
        <div className="df foot">
            <div className='linkdivs'>
                <div className="innerlinkdivs">
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/package">Package</Link></li>
                        <li><Link to="/services">Service</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/location">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className='linkdivs'>
                <div className="innerlinkdivs">
                    <h3>What We Do</h3>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Offices</Link></li>
                        <li><Link to="">Server</Link></li>
                        <li><Link to="">Maintenance</Link></li>
                        <li><Link to="/subscribe">Subscribe</Link></li>
                    </ul>
                </div>
            </div>
            <div className='linkdivs'>
                <div className="innerlinkdivs">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/services">General Info</Link></li>
                        <li><Link to="/location">Contact Us</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Terms and Conditions</Link></li>
                    </ul>
                </div>
            </div>
            <div className='linkdivs'>
                <div className="innerlinkdivs">
                    <h3>Talk to Us</h3>
                    <ul>
                        <li>info@gmail.com</li>
                        <li>+234 000 000 0000</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="fline"></div>
        <div className="df">
            <div className="df socials"></div>
            <p>2023 All Rights Reserved </p>
        </div>
        <a href="#head" className={color ? 'totop totopd' : 'totop'} ><KeyboardArrowUpRoundedIcon/></a>
    </div>
  )
}

export default Footer