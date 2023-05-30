import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Modal, ModalBody, ModalHeader } from 'react-bootstrap'

function ServiceCard({ serviceName = "", icon, description = "" }) {
    const tooLong = description.length > 50;
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <Card className='border-0 shadow services-card overflow-hidden h-100'>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)} size='xl'>
                <ModalHeader><h1>{serviceName}</h1></ModalHeader>
                <ModalBody>
                    <p className='lead'>{description}</p>
                    <Button className='mt-3'>Enquire</Button>
                </ModalBody>
            </Modal>
            {icon}
            <Card.Body>
                <h3 className="text-primary fw-bold pb-2">{serviceName}</h3>
                <div className="text text-muted">
                    {description.substring(0, 250)}{tooLong && "...."}
                </div>
                <ButtonGroup className='mt-3 w-100'>
                    <button className="btn btn-primary">Enquire</button>
                    {tooLong && <Button variant='outlin-primary' onClick={() => setModalOpen(true)}>See All</Button>}
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard