import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const DrugListItem = (props) => {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(props.drug.id);
  // Every time drug is favourited
  const changeLike = () => {
    const params = { favourite };
    const route = '/favourite/remove';
    Promise.all([
      axios.post(route, params),
      axios.get(`/favourite/${props.user}`)
    ]).then((data) => {
      console.log(data);
      props.setDrugs(data[1].data)
      setFavourite("");
    })
  }

  return (
    <>
      {favourite &&
        (<>
          <div onClick={() => navigate(`drugs/${props.drug.name}`)}>
            {props.drug.name}
          </div>
          <div onClick={changeLike}>Click me to unfavourite
          </div>
        </>)}
    </>
  )
}

export default DrugListItem