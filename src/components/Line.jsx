import React from 'react'

function Line(props) {
  return (
    <div style={{height:3,...props.style,width:props.width,backgroundColor:props.color || "var(--bs-primary)"}} className={props.className}> </div>
  )
}

export default Line