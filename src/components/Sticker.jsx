import React from 'react'
import { Stack } from 'react-bootstrap'

function Sticker({ color, title, description, style, rotationFactor = 1 }) {
    return (
        <Stack style={{ ...style, transform: `rotate(-${10 * rotationFactor}deg)`, width:"fit-content", zIndex:99999 }} className='text-center'>
            <div className='bg-light px-2 text-dark' style={{width:"fit-content",}}>{title}</div>
            <div className='px-2 ms-3' style={{ backgroundColor: color || "var(--bs-primary)", width:"fit-content" }}>{description}</div>
        </Stack>
    )
}

export default Sticker