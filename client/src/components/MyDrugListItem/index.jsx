import { useState } from "react";
import axios from "../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { BsHeartPulse } from "react-icons/bs";
import "../../styles/Drug.css";

const MyDrugListItem = ({ drug, setDrugs, user }) => {
  // Gather all important helpers and states
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(drug.id);

  // Every time drug is favourited
  const changeLike = () => {
    const params = { favourite };
    const route = "/favourite/remove";
    Promise.all([
      axios.post(route, params),
      axios.get(`/favourite/${user}`),
    ]).then((data) => {
      console.log(data);
      setDrugs(data[1].data);
      setFavourite("");
    });
  };

  return (
    <div className="mydrugcontainer">
      <div className="mymedlist">
        {favourite && (
          <>
            <div
              className="drug-faved"
              onClick={() => navigate(`/drugs/${drug.name}`)}
            >
              <h3 className="drugname">Drug Name : {drug.name}</h3>

            </div>
            <div className="unfavbutton">
              <BsHeartPulse className="un-fav-icon" onClick={changeLike} />
              <div className="unfavtext">Click me to unfavourite</div>
            </div>
            <div class="notes">{drug.notes}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyDrugListItem;
