import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Drug = (props) => {
  return (
    <div>
      <ArrowBackIcon size='large' onClick={() => props.setPage("SEARCH")}/>
      {props.content[0].data.results[0].overdosage[0].replace('10 OVERDOSAGE ', '')}
    </div>
  )
}

export default Drug
