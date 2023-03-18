import React from 'react'

const Drug = (props) => {
  return (
    <div>
      {props.content[0].data.results[0].overdosage[0].replace('10 OVERDOSAGE ', '')}
    </div>
  )
}

export default Drug
