import React from 'react'
import Intro from './Intro'
import { Helmet } from 'react-helmet'
import "./Services.scss"
import ServiceList from './ServiceList'
import Banner from './Banner'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'

function Services() {

  return (

    <div className='services'>
      <Helmet>
        <title>Telserve Networks &gt; Services</title>
        <meta
          name="description"
          content="Test Meta"
        />
      </Helmet>
      <Nav />
      <Intro />
      <Banner />
      <ServiceList />
      <Footer />
    </div>
  )
}

export default Services