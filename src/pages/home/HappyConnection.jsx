import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/happy_connect.jpg"
import img2 from "../../assets/rest.jpg"
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import Sticker from '../../components/Sticker'

function MainFeatures() {
    return (
        <div className='main-features py-5 my-5 text-start'>
            <Row className='align-items-center justify-content-center gy-3 gx-5'>
                <Col md={5}>
                    <img className='img-fluid' src={img} data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100' alt='Happy Woman' />
                </Col>
                <Col md={6} style={{ backgroundSize: "contain" }}>
                    <Sticker title='Good Internet' description="The Perfect Well being" rotationFactor={0.5} />
                    <div className="display-5 fw-bolder pt-2" data-aos='fade-left' data-aos-duration='800'>
                        Stay Happy And Connected
                    </div>
                    <div className="text text-muted my-2" data-aos='fade-left' data-aos-duration='800' data-aos-delay='300'>
                        We are dedicated to providing not only a reliable and efficient internet connection but also ensuring your satisfaction and happiness. You can expect a seamless, enjoyable, and hassle-free internet experience that keeps them connected to what matters most to you.
                    </div>
                    <Button className='btn-border-dark' data-aos='slide-up' data-aos-duration='700'>Get Started <FaChevronRight /> </Button>
                </Col>
            </Row>
            <div className="banner text-white my-5" id='rest'>
                <Container>
                    <h1 className='fw-bold'>Be In Control <em>Always</em></h1>
                    With Telseve, feel assured and in control of your internet experience. We provide reliable connectivity, ensuring uninterrupted service. Our high-speed performance empowers you to confidently engage in online activities, from streaming to gaming. Trust Telseve to keep you connected and in charge.
                </Container>
            </div>
        </div>
    )
}

export default MainFeatures