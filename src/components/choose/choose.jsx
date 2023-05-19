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
                                    title="Blazingly Fast"
                                    content="Nisi laborum est adipisicing in occaecat qui ut ipsum mollit enim esse quis proident exercitation. Ut ullamco cillum proident laborum dolore. "
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='300'
                                    icon={<MdSavings />}
                                    title="More With Less"
                                    content="Nisi laborum est adipisicing in occaecat qui ut ipsum mollit enim esse quis proident exercitation. Ut ullamco cillum proident laborum dolore. Ullamco officia ullamco est non excepteur culpa aute laboris commodo commodo eu eiusmod. Pariatur dolore"
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='500'
                                    icon={<MdEnergySavingsLeaf />}
                                    title="Envinroment Friendly"
                                    content="Nisi laborum est adipisicing in occaecat qui ut ipsum mollit enim esse quis proident exercitation. Ut ullamco cillum proident laborum dolore. Ullamco officia ullamco est non excepteur culpa aute laboris commodo commodo eu eiusmod. Pariatur dolore"
                                />
                            </Col>
                            <Col md={6}>
                                <Reason
                                    data-aos='fade-up' data-aos-duration='900ms'
                                    data-aos-delay='700'
                                    icon={<MdSupportAgent />}
                                    title="Amazing Customer Relation"
                                    content="Nisi laborum est adipisicing in occaecat qui ut ipsum mollit enim esse quis proident exercitation. Ut ullamco cillum proident laborum dolore."
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