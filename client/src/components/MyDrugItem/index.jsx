import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import { BsHeartPulse } from "react-icons/bs";

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
    <div className="drugcontainer">
      {favourite &&
        (<><h3 className="drugname">Drug Name :

        </h3>
        <Link to = {(`/drugs/${props.drug.name}`)} >

          <div className="drug-faved" onClick={() => navigate(`drugs/${props.drug.name}`)}>

            {props.drug.name}
          </div>
        </Link>
          <div className="unfavbutton">
          <BsHeartPulse className="un-fav-icon" onClick={changeLike}/>
          <div className="unfavtext">Click me to unfavourite
          </div>

          </div>
          <div>{props.drug.notes}</div>
        </>)}
    </div>
    
  )
}

export default DrugListItem