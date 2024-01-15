import React, { useState } from 'react'
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap'
import image from "../../assets/wwa.png"
import Line from '../../components/Line'

function WhoWeAre() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className='wwa'>
            <Modal size='xl' show={modalOpen} onHide={() => setModalOpen(false)}>
                <ModalHeader>
                    <h2>Who We Are</h2>
                </ModalHeader>
                <ModalBody>
                    Telserve Networks was founded in Lagos Nigeria in 2010, we’re primarily focused on the delivery of end to end telecommunications Solution through provision of dependable and fast internet service with standard broadband network capacity. We have been rendering quality internet services to our teeming customers through innovative, customer friendly and customized solutions to suit our customer’s needs. Our mission is to bring unlimited, uninterrupted fiber optic internet network to homes and businesses. Telserve provides residential and commercial customers with a choice of data plans to meet their needs. Telserve also provides enterprise level services that are custom tailored to a specific project and individually priced based on the needs and criteria established by the Enterprise customer.

                    Telserve also provide technical expertise for the following: System Planning, Turnkey Build, Maintenance (Managed Services), Upgrades, Microwave Transmission, Implementation Installation , Testing and Commissioning , Microwave Path Survey and LOS Path Engineering. We have support services for MPLS, IP convergence in the telecoms industry Telserve employs skilled and dedicated personnel to serve a customer repertoire that is expanding globally.

                    With the largest proportion of customers relying on our expertise in Telco Infrastructure, MW LOS, Planning and Implementation, we have grown significantly through strategic collaboration and partnership with both local and foreign partners Recognizing that our customers and partners place their trust in our solutions forms the foundation for our organization. We are committed to being proactive, supportive and responsive. We therefore expect our customers to capitalize on opportunities with our highly effective and dependable network solutions to expand and grow their businesses.
                </ModalBody>
                <ModalFooter><Button onClick={() => setModalOpen(false)}>Ok</Button></ModalFooter>
            </Modal>
            <Container>
                <Row className='align-items-center gx-5 gy-3'>
                    <Col md={5} data-aos='fade-right' data-aos-duration='800'>
                        <img className='img-fluid' src={image} alt='' />
                    </Col>
                    <Col md={7}>
                        <h1 className='display-5 fw-semibold text-primary' data-aos='fade-left' data-aos-duration='800'>
                            Who We are
                        </h1>
                        <Line width={158} className='mb-3 mx-auto' data-aos='fade-left' data-aos-delay='100' data-aos-duration='800' />
                        <p className="text text-muted" data-aos='fade-left' data-aos-delay='250' data-aos-duration='800'>
                        Telserve Networks was founded in Lagos Nigeria in 2010, we’re primarily focused on the delivery of end to end telecommunications Solution through provision of dependable and fast internet service with standard broadband network capacity. We have been rendering quality internet services to our teeming customers through innovative, customer friendly and customized solutions to suit our customer’s needs. Our mission is to bring unlimited, uninterrupted fiber optic internet network to homes and businesses.
                            <br />
                            <Button onClick={() => setModalOpen(true)}>See All</Button>
                            {/* Telserve
                            employs skilled and dedicated personnel to serve a customer
                            repertoire that is expanding globally. With the largest proportion of
                            customers relying on our expertise in Telco Infrastructure, MW LOS,
                            Planning and Implementation , we have grown significantly
                            through.... */}
                            {/* strategic collaboration and partnership with both
                            local and foreign partners
                            Recognizing that our customers and partners place their
                            trust
                            in our solutions forms the foundation for our
                            organization.
                            W
                            e are committed to being proactive, supportive and responsive.
                            We
                            therefore expect our customers to capitalize on opportunities with our
                            highly effective and dependable network solutions to expand
                            and
                            grow their businesses. */}
                        </p>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default WhoWeAre