import React from 'react'
import { useState, useEffect } from 'react'
import './nav.scss'
import './mobilenav.scss'
import eng from '../../pics/eng.png'
import frn from '../../pics/french.png'
import LogonoBg from '../../pics/netrix-logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import KeyboardArrowDOwnRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {Link} from 'react-router-dom'
import Langavatar from '../langavatar/Langavatar'

const Nav = () => {
  const [selected, setSelected] = useState(null)
  const [nav, setNav] = useState(null)

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  const togglenav = (i) =>{
    if (nav === i){
      return setNav(null)
    }
    setNav(i)
  }

  const [color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 500) {
			setColor(true)
		} else {
			setColor(false)
		}
	}
	window.addEventListener ('scroll', changeColor)
  return (
    <div className={color ? 'nav df navbg' : 'nav df'} id={nav === 1 ? 'nav'  : ''}>
        <div className="left df" >
            <img src={LogonoBg} alt="" id='logo'/>
            <div className="menuvis">
              <CloseIcon className={nav === 1 ? 'menu' : 'menu none'} onClick={() => togglenav(null)} />
            </div>
        </div>
        <ul className={nav === 1 ? 'center visible' : 'center df notvisible'}>
            <li className='navlink'><Link to='/'>Home</Link></li>
            <li className='navlink'><Link to='/package'>Package</Link></li>
            <li className='navlink'><Link to='/services'>Services</Link></li>
            <li className='navlink '><Link to='/help' className='help'>Help <LiveHelpOutlinedIcon id='help' /></Link></li>
            <li className='navlink'><Link to='/location'>Location</Link></li>
        </ul>
        <div className={nav === 1 ? 'sign visible' : 'sign df notvisible'}>
            <button className="lang" onClick={() => toggle(1)}>
              <Langavatar lang='ENG' src={eng}/> <KeyboardArrowDOwnRoundedIcon/>

              <ul className={selected === 1 ? 'show' : ''}>
                <li><Langavatar lang='FRN' src={frn}/></li>
              </ul>
            </button>
            <Link to='/subscribe' className='bluebtn sub'>Subscribe</Link>
        </div>
        <div className="menuvis">
          <MenuRoundedIcon className={nav === 1 ? 'menu none' : 'menu'} onClick={() => togglenav(1)}/>
        </div>
    </div>
  )
}

export default Nav