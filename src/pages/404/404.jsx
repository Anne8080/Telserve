import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}>
            <h1 className="display-5 fw-bold text-center">
                This Page Is Beign Worked On At The moment
            </h1>
            <Link to="/"><Button>Return Home</Button></Link>
        </div>
    )
}

export default NotFound