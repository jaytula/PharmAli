import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const DrugListItem = (props) => {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(props.drug_id);
  // Every time drug is favourited
  const changeLike = () => {
    const params = { favourite };
    const route = '/favourite/remove';
    Promise.all([
      axios.post(route, params),
    ]).then(() => {
      setFavourite("");
    })
  }

  return (
    <>
      {favourite &&
        (<>
          <div onClick={() => navigate(`drugs/${props.drug_id}`)}>
            {props.drug_id}
          </div>
          <div onClick={changeLike}>Click me to unfavourite
          </div>
        </>)}
    </>
  )
}

export default DrugListItem