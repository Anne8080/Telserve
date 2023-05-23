import React from 'react'
import { Card } from 'react-bootstrap'

function ServiceCard({ serviceName = "", icon, description = "" }) {
    return (
        <Card className='border-0 shadow services-card overflow-hidden'>
            {icon}
            <Card.Body>
                <h3 className="text-primary fw-bold pb-2">{serviceName}</h3>
                <div className="text text-muted">
                    {description}
                </div>
                <button className="btn btn-primary btn-border-dark mt-2">Enquire</button>
            </Card.Body>
        </Card>
    )
}

export default ServiceCard