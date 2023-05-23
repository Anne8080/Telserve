import { Button, Col, Container, Row } from 'react-bootstrap'
import { MdSpeed, MdSavings, MdSupportAgent, MdEnergySavingsLeaf } from "react-icons/md"
import React from 'react'

function ChooseUsNew() {
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col md={4}>
                        <h1 className="display-5 fw-bold mt-5 text-start" data-aos='fade-right' data-aos-duration='800'>
                            Why You should choose Us
                        </h1>

                        <Button size='lg' className='btn-border-dark  w-100 mt-5' data-aos='fade-right' data-aos-duration='800' data-aos-delay='300' >Read All</Button>
                    </Col>
                    <Col md={8}>
                        <Row className='g-3  mt-3 mt-sm-0'>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='100'
                                    icon={<MdSpeed />}
                                    title="Blazingly Fast Internet"
                                    content=" Say goodbye to buffering and endless loading times. Our state-of-the-art infrastructure ensures blazingly fast internet speeds, allowing you to enjoy smooth HD streaming, lag-free gaming, and lightning-quick downloads. "
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='300'
                                    icon={<MdSavings />}
                                    title="More With Less"
                                    content="Our dedicated support team is always ready to assist you. Whether you have a question, need technical assistance, or require troubleshooting, we are here to provide prompt and reliable customer support, ensuring your satisfaction."
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='500'
                                    icon={<MdEnergySavingsLeaf />}
                                    title="Envinroment Friendly"
                                    content="Choosing our Telserve Networks, not only will you benefit from our exceptional services, but you'll also contribute to a greener and more sustainable future because Our network and equipment are designed with energy efficiency in mind."
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='700'
                                    icon={<MdSupportAgent />}
                                    title="Amazing Customer Relation"
                                    content="Our dedicated support team is always ready to assist you. Whether you have a question, need technical assistance, or require troubleshooting, we are here to provide prompt and reliable customer support, ensuring your satisfaction."
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function Reason(props) {
    const { icon, title, content } = props;
    return <div className="bg-white p-3 rounded-3 h-100" {...props}>
        {{ ...icon, props: { size: 45, ...icon.props, color: "var(--bs-primary)" } }}
        <h2 className='fw-bold py-3'>{title}</h2>
        <p className="text-sm text-muted">{content}</p>
    </div>
}
export default ChooseUsNew