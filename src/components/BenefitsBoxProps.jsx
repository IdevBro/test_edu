import React from 'react'

function BenefitsBoxProps({number, text, title}) {
  return (
    <div>
      <h1>{number}</h1>
      <h2>{text}</h2>
      <p>{title}</p>
    </div>
  )
}

export default BenefitsBoxProps
