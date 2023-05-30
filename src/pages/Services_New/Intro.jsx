import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdArrowDownward, MdContactPhone } from 'react-icons/md'
import img from "../../assets/service.png"

function Intro() {
    return (
        <div className='py-5' id='head'>
            <Container>
                <Row className='gx-3 align-items-center'>
                    <Col md={6} data-aos='fade-right' data-aos-duration='600'>
                        <div className="intro-blob bg-primary text-white">
                            <h1 className="display-4 fw-bold">
                                Our Services
                            </h1>
                            <div className="text">
                                Our Superior quality services tailored to your needs. Exceeding expectations with precision, professionalism, and exceptional results. Trust us to deliver excellence every step of the way.
                            </div>
                            <a href="#list">
                                <button className="btn-light btn-border-dark btn mt-2"><MdArrowDownward /> Get Started</button>
                            </a>
                        </div>
                    </Col>
                    <Col md={6} className='d-none d-md-block'>
                        <img src={img} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro