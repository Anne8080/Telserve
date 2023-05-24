import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Line from '../../components/Line'
import env from "../../assets/environment.png"
import social from "../../assets/social.png"
import economy from "../../assets/economy.png"

function Csr() {
    return (
        <div className='csr bg-light gap-lg'>
            <Container>
                <h1 className='text-center fw-bold pt-4' data-aos='fade-up' data-aos-duration='800'>Corporate Social
                    Responsibility</h1>
                <Line width={73} className='mx-auto' />
                <p className="text my-5" style={{ textAlign: "justify" }} data-aos='fade-up' data-aos-duration='800'>
                    In 2019, Telserve Networks committed to CSR (Corporate Social Responsibility) to guide our local strategy as well as
                    future international growth. We believe that the financial, non financial performance creates value that extends beyond
                    its own operations
                    The Telserve Networks CSR Charter is supported 100% by the Board of Directors, Management, and by all employees, it
                    establishes a common framework to ensure respect for human rights, labour rights, environment, business ethics, and
                    local communities in which Telserve Networks operates . To guide competently its principles and consider Telserve
                    Networks CSR impact through this charter, Social, Environment, and Society issues, and commitments
                </p>
                <Row className='justify-content-center gx-5 gy-3 align-items-center' data-aos='fade-up' data-aos-duration='800'>
                    <Col xs={4} md={3}>
                        <img src={env} alt="" className="img-fluid" />
                    </Col>
                    <Col md={7}>
                        <h1 className="fw-bold">
                            ENVIRONMENTAL COMMITMENTS
                            <Line width={200} className='mx-auto'/>
                        </h1>
                        <p className="text">
                            Reducing our environmental impact
                            by measuring, reporting, and
                            minimizing the use of energy and
                            resources.
                        </p>
                    </Col>
                </Row>

                <Row className='justify-content-center gx-5 gy-3 align-items-center' data-aos='fade-up' data-aos-duration='800'>
                    <Col md={7} className='order-2 order-md-1'>
                        <h1 className="fw-bold">
                            SOCIAL COMMITMENTS
                            <Line width={200} className='mx-auto'/>
                        </h1>
                        <p className="text">
                            Enhancing the workplace as a fair, diverse, and
                            equitable employer, providing professional,
                            developmental, and learning opportunities in a
                            safe working environment.
                        </p>
                    </Col>
                    <Col xs={4} md={3} className='order-1 order-md-2'>
                        <img src={social} alt="" className="img-fluid" />
                    </Col>
                </Row>

                <Row className='justify-content-center gx-5 gy-3 align-items-center' data-aos='fade-up' data-aos-duration='800'>
                    <Col xs={4} md={3}>
                        <img src={economy} alt="" className="img-fluid" />
                    </Col>
                    <Col md={7}>
                        <h1 className="fw-bold">
                            ECONOMICAL COMMITMENTS
                            <Line width={200} className='mx-auto'/>
                        </h1>
                        <p className="text">
                            Engaging with our communities by
                            addressing industry-wide issues, and
                            acting philanthropically in the
                            countries where we operate:
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Csr