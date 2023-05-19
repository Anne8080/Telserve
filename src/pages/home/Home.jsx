import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import './home.scss'
import './mobilehome.scss'
import Carousel from '../../components/carousel/Carousel.jsx'
import Company from '../../components/company/Company.jsx'
import Tabs from '../../components/tabs/Tabs.jsx'
import Chooseus from '../../components/chooseus/Chooseus.jsx'
import Footer from '../../components/footer/Footer.jsx'
import {motion} from 'framer-motion'
import woman from '../../pics/woman.png'
import {Link} from 'react-router-dom'
import Faq from '../../components/faq/Faq.jsx'
import ChooseUsNew from '../../components/choose/choose.jsx'

const Home = () => {
    const slides = [
        { title: "We're In The Business Of 'Get Quality Internet Service'", message: "Get Started", color: "orange" },
        { title: "Measure Me App is Just my Goto Tool", message: "Check it out", color: "grey"  },
        { title: "Measure Me App is Just my Goto Tool", message: "Find", color: "pink"  },
        { title: "Measure Me App is Just my Goto Tool", message: "Visit", color: "blue" },
        { title: "Measure Me App is Just my Goto Tool", message: "Join", color: "yellow"  }
      ];
  return (
    <div style={{backgroundColor: '#EBEBEB', overflow: 'hidden'}} id='head'>
        <Nav/>
        <Carousel slides={slides} />
        <Company/>
        <section className="subtab">
            <h1 className="choose">Choose Your Package</h1>
            <Tabs/>
        </section>
        <ChooseUsNew />
        <section>
            <Faq/>
        </section>
        <section className='subsec df'>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{ y: '0', opacity:1 }} transition={{duration: 0.7, type: 'spring'}} className="left"><img src={woman} alt="" /></motion.div>
            <div className="right">
                <h1 className="subus">Come Subscribe with Us</h1>
                <Link to='/subscribe' className="bluebtn btn">Subscribe</Link>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home