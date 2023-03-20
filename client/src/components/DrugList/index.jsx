import React from 'react'

const DrugList = (props) => {
  console.log(props.drugList[0]);
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
