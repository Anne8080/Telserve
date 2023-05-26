import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import data from "./data"

function ServiceList() {
    return (
        <div>
            <Container>
                <h1 className="text-center fw-bold">
                    List Of <span className="text-primary">Services</span>
                </h1>
                <div className="pb-5 mb-5 pt-3">
                    <Row className='g-5 pb-5'>
                        {
                            data.map(service => <Col data-aos='fade-up' data-aos-duration='800' md={6} lg={4} key={data.indexOf(service)}>
                                <ServiceCard
                                    icon={<img src={service.img} className='services-image' alt={service.name} />}
                                    description={service.description}
                                    serviceName={service.name}
                                />
                            </Col>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ServiceList