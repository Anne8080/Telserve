import React from 'react'
import Line from '../../components/Line'
import { Row, Col, Container } from 'react-bootstrap'
import TeamCard from '../../components/TeamCard'
import bright from "../../assets/staff/bright.jpg"

function Team() {
    return (
        <div className='team'>
            <Container>
                <h3 className="fw-bold text-center">
                    Meet The Team
                    <Line width={120} className='mx-auto' />
                </h3>

                <Row className='gy-3 mt-5'>
                    <Col md={3}>
                        <TeamCard name="Darren Spencer" description="Darren carries a wealth of experience with 25 years of development and implementation of infrastructure projects, primarily in Africa. A seasoned C-level executive, in the Defence, Air Traffic Control, Telecoms and Construction industries across the UK, Middle East & African markets.Darren hold several Diploma’s in Business & Finance as well as IT Science. With over 3000 tower build projects under his belt Darren is a well seasoned Telecoms Executive.His other passion is CSR programmes, and will ensure that CSR be at the heart of everything Telserve Networks doesF"
                            position="Chief Executive Officer"
                        />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Aje Babatunde' description='He is Microsoft Certified Professional (MCP), Cisco Certified Network Association (CCNA), and Alvarion certified microwave Engineer. He is a professionally competent Communications and Wireless Transmission Systems installation, design and Implementation Expert with deep knowledge of the Nigerian telecommunication network terrain in terms of network development and systems integration. ' position='EXECUTIVE DIRECTOR OF OPERATIONS'/>
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Akpojaro Michael' description='He holds a Microsoft Certified Professional (MCP), and Cisco Certified Network Association (CCNA) certificate, he has garnered professional experience from companies like Ericson telnet and Motorola he is very much experienced in Communications and Wireless Transmission Systems installation, design and Implementation with a deep knowledge of the Nigerian telecommunication network deployment.' position='TECHNICAL ADVISOR' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Abbas Babatunde' description='He is experienced in Communications and Wireless Transmission Systems, Design, Implementation, Maintenance. He is a Harris certified Transmission Engineer, WavionCertified Installer and AlvarionCertified Installer. He holds a Bachelors Degree in Computer Science as well actively participated in the Transmission Network Design for many network operators including Mtel, NITEL, Voip-Telesat, Reltel, Cellcom, Intercellular and Bell Benin Republic.' position='HEAD TECHNICAL SERVICES' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Adewunmi Omobola' description='Bola is responsible for the company’s overall financial strategy and banking relationship. A very meticulous & reliable Administrator, she is a graduate with B.Sc in Accounting. She has over ten years’ diverse banking and industrial accounting experience traversing First Bank, Bank PHB and TCF Engineering limited .' position='FINANCE AND ACCOUNTS MANAGER' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Taofeek Azeez' description='He is a professional in Communications and Wireless Transmission Systems, Implementation, Maintenance and RF Planning. He is a very competent and versatile with the installation of various Microwave Transmission radios like Harris Stratex , Ceragon and Ericson he is a Cisco Certified Network Associate, Elcotel Payphone Certified Installer and DaRTCertified Installer (Configuration & Software). ' position='FIELD SERVICE MANAGER' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Ndutimobong Enang' description='Ndutim is tasked with requirement gathering and tailoring products & services; and motivating teams to deliver solutions in line with Telserve’s vision and operational goals. An eclectic, she has garnered Product Management experience from diverse sectors such as construction where she holds a Master’s degree in Construction Technology and, more recently in software engineering having interned at Microsoft.' position='PROJECT MANAGEMENT/PRODUCT SERVICES' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Bright Edet' description='Bright is a driven Marketing Executive with great passion for developing solutions that demonstrate Telserve’s capacity to deliver quality products and services to customers in a way that surpasses their expectations thus securing profitable business connections for Telserve. He holds a BSc degree in Theology from and, a NCE in Political Science & Economics.' position='MARKETING MANAGER' img={bright} />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Ope Omotosho' description='Opeyemi is a talented Customer Success Executive at Telserve. A graduate of Political Science, She is tasked with building rapport & monitoring workflows that keep customers in sync with Telserve innovations & processes designed to keep moving their businesses forward.' position='CUSTOMER SUCCESS EXECUTIVE' />
                    </Col>
                    <Col md={3}>
                        <TeamCard name='Olumuyiwa Adesina' description='He is the head of the program management team. He has had vast experience and accumulated diverse knowledge in the field of project management with deep interest in research and corporate strategy. He is a graduate of Electrical Electronics and alsoholds a master’s of science degree (MIT) in Information Technolog' position='SNR. PROGRAM MANAGER' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team