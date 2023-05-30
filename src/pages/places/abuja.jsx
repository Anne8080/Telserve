import React from 'react'
import Nav from '../../components/nav/Nav'
import "./places.scss"
import Line from '../../components/Line'
import { Col, Container, Row } from 'react-bootstrap'
import plans from "./data.json"
import PlanCard from '../../components/PlanCard'
import Footer from '../../components/footer/Footer'
import { Helmet } from 'react-helmet'
function Lagos() {
    return (
        <div className='places'>
            <Helmet>
                <title>
                    Telserve Abuja Plans
                </title>
            </Helmet>
            <Nav />
            <div className='banner' style={{ backgroundImage: `url(${require("../../assets/abuja.webp")})` }} id='head'>
                <h1 className='fw-bold display-5'>
                    Abuja Plans
                    <Line width={100} className='mx-auto' />
                </h1>
            </div>
            <Container className='py-5'>
                <Row className='gy-3 justify-content-center'>
                    {plans.abuja.map(p => <Col md={4} lg={3} key={p.id}>
                        <div className="shadow h-100">
                            <PlanCard id={p.id} name={p.name} price={p.price} speed={p.speed} setUp={p.setup} features={p.features} highlight />
                        </div>
                    </Col>)}
                </Row>

            </Container>
            <Footer />
        </div>
    )
}


export default Lagos