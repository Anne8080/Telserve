import React from 'react'
import Nav from '../../components/nav/Nav'
import "./places.scss"
import Line from '../../components/Line'
import { Col, Container, Row } from 'react-bootstrap'
import plans from "./data.json"
import PlanCard from '../../components/PlanCard'
import Footer from '../../components/footer/Footer'
function Lagos() {
    return (
        <div className='places'>
            <Nav />
            <div className='banner' style={{ backgroundImage: `url(${require("../../assets/watching_tv.jpg")})` }}>
                <h1 className='fw-bold display-5'>
                    Lagos Plans
                    <Line width={100} className='mx-auto' />
                </h1>
            </div>
            <Container className='py-5'>
                <Row className='gy-3'>
                    {plans.lagos.map(p => <Col md={4} lg={3}>
                        <div className="shadow">
                            <PlanCard name={p.name} price={p.price} speed={p.speed} setUp={p.setup} features={p.features} highlight />
                        </div>
                    </Col>)}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}


export default Lagos