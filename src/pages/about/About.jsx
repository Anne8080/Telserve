import React from 'react'
import Nav from '../../components/nav/Nav'
import "./About.scss"
import Line from "../../components/Line"
import WhoWeAre from './WhoWeAre'
import Csr from './Csr'
import HSEPolicy from './HSEPolicy'
import { Helmet } from 'react-helmet'
import CGMR from './CGMR'
import Team from './Team'
import cover from "../../assets/corporate.webp"
import Footer from '../../components/footer/Footer'

function About() {
  return (
    <div className='about-us'>
        <Nav />
      <Helmet>
        <title>
          About Us
        </title>
      </Helmet>
      {/* TODO: Add a cooler background here */}
      <div className="bg-cover gap bg-about" data-aos='fade-down'style={{
        backgroundImage:`url(${cover})`
      }}>
        <div className='container'>
          <h1 className="display-3 fw-bold text-light">About Us</h1>
          <Line width={160} className='mx-auto' />
        </div>
      </div>
      <WhoWeAre />
      <Csr />
      <HSEPolicy />
      <CGMR />
      <Team />
      <Footer />
    </div>
  )
}

export default About