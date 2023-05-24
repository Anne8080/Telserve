import React from 'react'
import bg from "../../assets/widecollage.jpg"
import { Button, Container } from 'react-bootstrap'
import Line from '../../components/Line'
function HSEPolicy() {
    return (
        <div className='hse text-light' style={{
            backgroundImage: `url(${bg})`
        }}>
            <Container>
                <h1 className="fw-bold text-center text-uppercase pb-2">
                    Health, Safety and Environment Policy
                    <Line width={200} className='mx-auto' />
                </h1>

                <p className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Telserve Networks, we recognize the importance of the Health and Safety
                    of persons and property, directly or indirectly involved in our business
                    operations, and the environment in which we operate. Human Resources are
                    our greatest assets. It is therefore our policy, to safeguard all persons,
                    property and Environment connected with our operations.
                </p>
                <p className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Year to year we continue to maintain a zero-accident record by enacting strict
                    policies to safeguard our staff and members of communities where they work.
                    HSE principles are the cornerstone of Telserve culture that addresses issues
                    such as accountability, training, communication, resources, engineering
                    design, performance Measurement, and sustainable development.
                    Therefore, as a key strategy, Management continues to:
                </p>
                <ol className=''>
                    <li>
                        Take a proactive approach towards creating safe work environment
                        for all employees and will be accountable for promoting continued
                        safety education and training for all employees, assigning
                        responsibility for all aspects of program, continuously reviewing the
                        program to identify potential areas of improvement, and ensuring a
                        thorough evaluation of all incidents.
                    </li>
                    <li>
                        Address the environmental and health impact of our operations by
                        reducing waste, emissions, and discharges and by using energy
                        efficiently.
                    </li>
                    <li>
                        Demonstrate good citizenship in every community in which we
                        operate.
                    </li>
                </ol>
                <Button size='sm'>See Them all</Button>
            </Container>
        </div>
    )
}

export default HSEPolicy