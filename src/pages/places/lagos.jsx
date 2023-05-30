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
                    Telserve Lagos Plans
                </title>
            </Helmet>
            <Nav />
            <div className='banner' style={{ backgroundImage: `url(${require("../../assets/watching_tv.jpg")})` }} id='head'>
                <h1 className='fw-bold display-5'>
                    Lagos Plans
                    <Line width={100} className='mx-auto' />
                </h1>
            </div>
            <Container className='py-5'>
                <div className="text-center mb-2">Home Plans</div>
                <Row className='gy-3 justify-content-center'>
                    {plans.lagos.map(p => <Col md={4} lg={3} key={p.id}>
                        <div className="shadow h-100">
                            <PlanCard id={p.id} name={p.name} price={p.price} speed={p.speed} setUp={p.setup} features={p.features} highlight />
                        </div>
                    </Col>)}
                </Row>

                <div className="text-center mb-2 mt-5 pt-5 ">Enterprise Plans</div>
                <Row className='gy-3 justify-content-center'>
                    {plans.lagosEnt.map(p => <Col md={4} lg={3} key={p.id}>
                        <div className="shadow">
                            <PlanCard id={p.id} name={p.name} price={p.price} speed={p.speed} setUp={p.setup} features={["All Of Home Features","Dedicated Internet","Faster Speeds"]} highlight />
                        </div>
                    </Col>)}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}


export default Lagos