import React from 'react'

const DrugList = (props) => {
  return (

    <div>
      {props.drugList.map((drug) => (
        <div>
          {drug.name}
        </div>
      ))}
    </div>
  )
}

export default DrugList 
