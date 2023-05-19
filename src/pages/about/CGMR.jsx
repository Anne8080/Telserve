import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import corp from "../../assets/corporate.webp"
import Line from '../../components/Line'
import manage from "../../assets/management.jpg"
function CGMR() {
    return (
        <div className='py-5 my-5'>
            <Container>
                <h2 className="fw-bold text-uppercase"data-aos='slide-right' data-aos-duration='800'>
                    Corporate Governance & Management Profile
                    <Line width={200} data-aos='slide-right' data-aos-duration='800' data-aos-delay='300' className='mx-auto' />
                </h2>
                <Row className='pb-5 pt-4' data-aos='fade-right' data-aos-duration='900'>
                    <Col md={9} className='cgmr left mt-5 position-relative'>
                        <div className="">
                            <h2 className="fw-bold">
                                Corporate Governance
                                <Line width={180} className='mx-auto' />
                            </h2>
                            <p className="text">
                                At Telserve Networks, we recognize that sound corporate governance is achieved only by constant review and
                                adaptation of its structures, process and policies to take into account not only internal group developments but also
                                accommodate externally recognized standards of best practices as they evolve.
                                The policies and procedures adopted by Telserve Networks are designed not merely to ensure compliance with
                                applicable laws and regulations, but also to maximize sustainable returns, to provide all stakeholders with the
                                assurance that the group’s businesses are being managed appropriately and to safeguard the people, assets and
                                reputation of the company and its valued clients
                            </p>
                        </div>
                        <img src={corp} alt="corporate governance" className="right" />
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='justify-content-end' data-aos='fade-left' data-aos-duration='900'>
                    <Col md={9} className='cgmr right mt-5 position-relative'>
                        <div className="content-right text-end">
                            <h2 className="fw-bold">Management Profile
                                <Line width={180} className='ms-auto' />
                            </h2>

                            <p className="text">
                                Under the direction of technically sound and administratively competent management team, the company
                                continuously strives to maintain its leadership position by adopting modern Enterprise Content Management
                                systems and approaches. This group of goal-oriented, results-driven managers guides the company in its
                                management and operational drive for growth and success.
                            </p>
                        </div>
                        <img src={manage} alt="corporate governance" className="left" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CGMR