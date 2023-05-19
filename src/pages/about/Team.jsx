import React from 'react'
import Line from '../../components/Line'
import { Row, Col, Container } from 'react-bootstrap'
import TeamCard from '../../components/TeamCard'

function Team() {
    return (
        <div className='team'>
            <Container>
                <h3 className="fw-bold text-center">
                    Meet The Team
                    <Line width={120} className='mx-auto' />
                </h3>

                <Row>
                    <Col md={3}>
                        <TeamCard name="Aje Damilola" description="Officia voluptate cillum irure ut enim incididunt commodo eiusmod minim anim tempor laborum culpa. Laboris esse magna nulla aute magna anim est voluptate sint. Amet excepteur do nulla officia." 
                        position="Software Developer"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team