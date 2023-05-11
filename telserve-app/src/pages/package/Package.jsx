import React from 'react'
import './package.scss'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Tabs from '../../components/tabs/Tabs.jsx'
import Info from '../../components/info/Info'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import Advan from '../../components/advan/Advan'
import more from '../../pics/more.png'
import data from '../../pics/data.jpg'
import speed from '../../pics/speed.jpg'
import security from '../../pics/security.jpg'

const Package = () => {
  return (
    <div style={{backgroundColor: '#EBEBEB', overflow: 'hidden'}} id='head'>
      <Nav/>
      <section className='packhead df'>
        <motion.div initial={{y: -50}} animate={{ y: '0'}} transition={{duration: 1.5, type: 'tween'}} className="left"><img src={more} alt="" /></motion.div>
        <div className="right">
          <motion.h1 initial={{x: 200}} animate={{ x: '0'}} transition={{duration: 2, type: 'spring'}} >Get More. <br />For Less.</motion.h1>
          <Link to='/services' className='bluebtn msg'>Why Us?</Link>
        </div>
      </section>
      <section className="subtab">
          <h1 className="choose">Choose Your Package</h1>
          <Tabs/>
      </section>
      <section className="what">
        <h1 className="choose">What's In These Packages?</h1>
        <div className="packages df">
          <Info src= {security} title='Security' word='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae accusantium veritatis ut laudantium ab magnam odit quis architecto minima a.' link=''/>
          <Info src= {data} title='Data' word='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae accusantium veritatis ut laudantium ab magnam odit quis architecto minima a.' link=''/>
          <Info src= {speed} title='Speed' word='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae accusantium veritatis ut laudantium ab magnam odit quis architecto minima a.' link=''/>
        </div>
      </section>
      <section className="adv">
        <div className="heading">
          <h1>Advantages of <span>Telserve</span></h1>
          <div className="line"></div>
        </div>
        <div className="packages df">
          <Advan icon=<WorkspacePremiumOutlinedIcon style={{fontSize: '3rem', color: 'orange' }}/> ad='30-Day Guarantee' word='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, vitae.' />
          <Advan icon=<LiveHelpOutlinedIcon style={{fontSize: '3rem', color: 'orange' }}/> ad='24/7 Live Assistance' word='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, vitae.' />
          <Advan icon=<LanOutlinedIcon style={{fontSize: '3rem', color: 'orange' }}/> ad='Easy Deployment' word='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, vitae.' />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Package