import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import img from "../../assets/services/installation.jpg"

function ServiceList() {
    return (
        <div>
            <Container>
                <h1 className="text-center fw-bold">
                    List Of <span className="text-primary">Services</span>
                </h1>
                <div className="pb-5 mb-5 pt-3">
                    <Row className='g-5 pb-5'>
                        <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4}>
                            <ServiceCard
                                icon={<img src={img} className='services-image' />}
                                description='In eu ea est pariatur culpa ex minim officia veniam 
                                tempor excepteur deserunt. Adipisicing esse nisi proident aliquip
                                 labore ea aute Lorem quis non minim ad.'
                                   serviceName='Interet Installation'
                            />
                        </Col>
                        <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4}>
                            <ServiceCard
                                icon={<img src={img} className='services-image' />}
                                description='In eu ea est pariatur culpa ex minim officia veniam 
                                tempor excepteur deserunt. Adipisicing esse nisi proident aliquip
                                 labore ea aute Lorem quis non minim ad.'
                                   serviceName='Interet Installation'
                            />
                        </Col>
                        <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4}>
                            <ServiceCard
                                icon={<img src={img} className='services-image' />}
                                description='In eu ea est pariatur culpa ex minim officia veniam 
                                tempor excepteur deserunt. Adipisicing esse nisi proident aliquip
                                 labore ea aute Lorem quis non minim ad.'
                                   serviceName='Interet Installation'
                            />
                        </Col>
                        <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4}>
                            <ServiceCard
                                icon={<img src={img} className='services-image' />}
                                description='In eu ea est pariatur culpa ex minim officia veniam 
                                tempor excepteur deserunt. Adipisicing esse nisi proident aliquip
                                 labore ea aute Lorem quis non minim ad.'
                                   serviceName='Interet Installation'
                            />
                        </Col>
                        <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4}>
                            <ServiceCard
                                icon={<img src={img} className='services-image' />}
                                description='In eu ea est pariatur culpa ex minim officia veniam 
                                tempor excepteur deserunt. Adipisicing esse nisi proident aliquip
                                 labore ea aute Lorem quis non minim ad.'
                                   serviceName='Interet Installation'
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ServiceList