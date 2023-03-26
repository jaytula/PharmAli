import { useEffect, useState } from "react";
import axios from "axios";
import useApplicationData from "../../hooks/useApplicationData";
import { useNavigate } from "react-router-dom";
import DrugListItem from "../MyDrugItem";
import "../../styles/Drug.css";

const MyDrugs = (props) => {
  const navigate = useNavigate();
  // const [drugs, setDrugs] = useState([]);

  // useEffect(() => {
  //   if (props.user) {
  //     Promise.all([
  //       axios.get(`/favourite/${props.user}`),
  //     ]).then((data) => {
  //       props.setDrugs(data[0].data)
  //     })
  //   }
  // }, [props.user]);

  return (
    <div className="mymedListSection">
        <h1> My Med List</h1>
      <div className="drugListItemContainer">
        {props.drugs.map((drug) => (
          <div className="drugListItem">
            <DrugListItem
              key={drug.drug_id}
              setDrugs={props.setDrugs}
              drug={drug}
              user={props.user}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDrugs;
