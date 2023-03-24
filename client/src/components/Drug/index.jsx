import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../styles/Drug.css";
import medlist from "../../assets/images/medlist.png";
import locator from "../../assets/images/locator.png";
import blogs from "../../assets/images/blogs.png";
import journal from "../../assets/images/journal.png";

const Drug = (props) => {
  // favourite will be the saved_medication id
  const [favourite, setFavourite] = useState();
  const [drugId, setDrugId] = useState();
  const [content, setContent] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const drugName = location.pathname.split("/")[2];

  // First time page is visited
  useEffect(() => {
    const drugName = location.pathname.split("/")[2];
    axios.get(`https://api.fda.gov/drug/label.json?search=description:${drugName}`)
      .then((data) => {
        setContent({
          Description: data.data.results[0].description
            ? stringifier(data.data.results[0].description[0])
            : "",
          "Drug Interaction": data.data.results[0].drug_interactions
            ? stringifier(data.data.results[0].drug_interactions[0])
            : "",
          "Dosage and Administration": data.data.results[0]
            .dosage_and_administration
            ? stringifier(data.data.results[0].dosage_and_administration[0])
            : "",
          "Adverse Reaction": data.data.results[0].adverse_reactions
            ? stringifier(data.data.results[0].adverse_reactions[0])
            : "",
          Contraindications: data.data.results[0].contraindications
            ? stringifier(data.data.results[0].contraindications[0])
            : "",
          "Information for Patients": data.data.results[0]
            .information_for_patients
            ? stringifier(data.data.results[0].information_for_patients[0])
            : "",
          Overdosage: data.data.results[0].overdosage
            ? stringifier(data.data.results[0].overdosage[0])
            : "",
        });
      })
      .catch((err) => {
        console.log("Error", err)
      })

    if (props.user) {
      Promise.all([
        axios.get(`/favourite/${props.user}&${drugName}`),
        axios.get(`/drugs/${drugName}`)
      ])
        .then((data) => {
          if (data[0].data.length > 0) {
            setFavourite(data[0].data[0].id)
          }
          setDrugId(data[1].data[0].id)
        })
    }
  }, []);

  const stringifier = (string) => {
    for (let i = 0; i < string.length; i++) {
      if (isNaN(string[i])) {
        return string.substring(i);
      }
    }
  };

  // Every time drug is favourited
  const changeLike = () => {
    let params;
    let route;
    if (favourite) {
      params = { favourite };
      route = "/favourite/remove";
    } else {
      params = { user_id: props.user, drug_id: drugId };
      route = "/favourite/add";
    }
    Promise.all([axios.post(route, params)]).then((data) => {
      favourite ? setFavourite("") : setFavourite(data[0].data.id);
    });
  };

  return (
    <>
      <div className="image-container">
        <div className="image1">
          <Link to="/mydrugs">
            <img className="drug-image" src={medlist} alt={"medlist"} />
          </Link>
          <Link to="/pharma">
            <img className="drug-image" src={locator} alt={"pharmlocator"} />
          </Link>
          <Link to="/blogs">
            <img className="drug-image" src={blogs} alt={"blogs"} />
          </Link>
          <Link to="/myjournal">
            <img className="drug-image" src={journal} alt={"journal"} />
          </Link>
        </div>
      </div>

      <div className="drug">
        <ArrowBackIcon size="large" onClick={() => navigate("/search")} />
        <span className="drug-name">
          <h1>Drug Name: {drugName}</h1>
          {props.user &&
            <>
              {!favourite && (
                <div onClick={changeLike}>Click me to favourite this drug</div>
              )}
              {favourite && <div onClick={changeLike}>Click me to unfavourite</div>}
            </>}
          <hr />
        </span>
        {Object.keys(content).map((data) => (
          <>
            <div className="drug-container">
              <div className="subtitle">
                <h1>{data}</h1>
                <hr />
              </div>
              <div className="drug-content">
                <p className="drug-text">{content[`${data}`]}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Drug;
