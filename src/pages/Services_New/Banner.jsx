import React from 'react'
import banner from "../../assets/services/banner.jpg"
import { Container } from 'react-bootstrap'
import Line from '../../components/Line'
function Banner() {
    return (
        <div className='bg-cover text-white text-center my-5' style={{
            backgroundImage: `url(${banner})`
        }}>
            <Container>
                <h1 className="fw-bold display-3">
                    Get Started
                    <Line width={160} className='mx-auto' style={{marginTop:-5, marginBottom:20}}/>
                </h1>
                <p>Choose One Of The Suite of services that Telserve offers</p>
            </Container>
        </div>
    )
}

export default Banner