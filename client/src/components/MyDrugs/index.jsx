import { useEffect, useState } from "react"
import axios from "axios"
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate } from "react-router-dom";
import DrugListItem from "../MyDrugItem";

const MyDrugs = (props) => {
  const navigate = useNavigate();
  // const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/favourite/${props.user}`),
      ]).then((data) => {
        props.setDrugs(data[0].data)
      })
    }
  }, [props.user]);

  return (
    <>
      {props.drugs.map((drug) => (
        <DrugListItem
          key={drug.drug_id}
          drug={drug}
          user={props.user}
        />
      ))}
    </>
  )
}

export default MyDrugs