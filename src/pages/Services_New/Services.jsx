import React from 'react'
import Intro from './Intro'
import { Helmet } from 'react-helmet'
import "./Services.scss"
import ServiceList from './ServiceList'
import Banner from './Banner'
import Nav from '../../components/nav/Nav'

function Services() {

  return (

    <div className='services'>
      <Helmet>
        <title>Telserve Networks &gt; Services</title>
      </Helmet>
      <Nav />
      <Intro />
      <Banner />
      <ServiceList />
    </div>
  )
}

export default Services