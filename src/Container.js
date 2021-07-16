import React from 'react'

export default function Container(props) {
  return (
    <div style={{maxWidth: 1200}}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
