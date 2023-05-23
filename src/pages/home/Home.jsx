import React from 'react'
import Nav from '../../components/nav/Nav.jsx'
import './home.scss'
import './mobilehome.scss'
import Carousel from '../../components/carousel/Carousel.jsx'
import Company from '../../components/company/Company.jsx'
import Tabs from '../../components/tabs/Tabs.jsx'
import Footer from '../../components/footer/Footer.jsx'
import { motion } from 'framer-motion'
import woman from '../../pics/woman.png'
import { Link } from 'react-router-dom'
import Faq from '../../components/faq/Faq.jsx'
import ChooseUsNew from '../../components/choose/choose.jsx'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Line from "../../components/Line.jsx"

const Home = () => {
    const slides = [
        { title: "Internet service provision is our fortè", message: "Contact Us", color: "orange", text: "black" },
        { title: "Measure Me App is Just my Goto Tool", message: "Learn More", color: "grey" },
        { title: "Measure Me App is Just my Goto Tool", message: "Find", color: "pink" },
        { title: "Measure Me App is Just my Goto Tool", message: "Visit", color: "blue" },
        { title: "Measure Me App is Just my Goto Tool", message: "Join", color: "yellow" }
    ];
    return (
        <div style={{ backgroundColor: '#EBEBEB', overflow: 'hidden' }} id='head'>
            <Nav />
            <Carousel slides={slides} />
            <Company />
            <section className="subtab">
                <h1 className="choose">Choose Your Package</h1>
                <Tabs />
            </section>
            <ChooseUsNew />
            <div className='subsec df'>
                <Container>
                    <Row>
                        <Col md={5}>
                            <img className='img-fluid' src={woman} data-aos='zoom-in-right' data-aos-duration='800' data-aos-delay='100' alt='Join Telservenetworks' />
                        </Col>
                        <Col md={7}>
                            <div className="d-flex justify-content-center text-white h-100 flex-column" data-aos='zoom-out' data-aos-duration='800' data-aos-delay='100'>
                                <Line color='var(--bs-info)' width={150} className='mx-auto' />
                                <h1 className="fw-bold display-5">
                                    Come Subscribe With Us
                                </h1>
                                <p className="text">
                                    And Get First class quality internet service
                                </p>
                                <Button variant='info' data-aos='fade' data-aos-delay="600">Get Started</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section>
                <Faq />
            </section>
            <Footer />
        </div>
    )
}

export default Home