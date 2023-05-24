import React from 'react'

function TeamCard({ name, img, description, position }) {
    return (
        <div className='shadow team-card'>
            <img src={img || "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"} alt={name} />
            <div className="content text p-2 p-md-3">
                {description}
            </div>
            <div className="h-100 position-absolute d-flex flex-column justify-content-end w-100">
                <div className="fade-container">
                    <div className="fade-bg"></div>
                </div>
            </div>
            <div className="info p-3">
                <h5 className='fw-bold'>
                    {name}
                </h5>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default TeamCard