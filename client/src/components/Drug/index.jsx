import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import '../../styles/Drug.css'

const Drug = (props) => {
  // favourite will be the saved_medication id
  const [favourite, setFavourite] = useState("");
  const [content, setContent] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();


  // First time page is visited
  useEffect(() => {
    const drugId = location.pathname.split('/')[2];
    axios.get(`/drugs/${drugId}`)
      .then((drug) => {
        return axios.get(`https://api.fda.gov/drug/label.json?search=description:${drug.name}`)
      })
      .then((data) => {
        console.log(data.data.results[0].description[0],
          data.data.results[0].drug_interactions[0],
          data.data.results[0].dosage_and_administration[0],
          data.data.results[0].adverse_reactions[0],
          data.data.results[0].contraindications[0],
          data.data.results[0].information_for_patients[0],
          data.data.results[0].overdosage[0]);
        setContent([data.data.results[0].description[0],
        data.data.results[0].drug_interactions[0],
        data.data.results[0].dosage_and_administration[0],
        data.data.results[0].adverse_reactions[0],
        data.data.results[0].contraindications[0],
        data.data.results[0].information_for_patients[0],
        data.data.results[0].overdosage[0]]);
      })
  }, []);

  // First time page is visited
  useEffect(() => {
    const drugId = location.pathname.split('/')[2];
    if (props.user) {
      axios.get(`/favourite/${props.user}&${drugId}`)
        .then((data) => {
          (data.data.length === 0) ? setFavourite("") : setFavourite(data.data[0].id);
        })
    }
  }, [props.user]);

  // Every time drug is favourited
  const changeLike = () => {
    const drugId = location.pathname.split('/')[2]
    let params;
    let route;
    if (favourite) {
      params = { favourite };
      route = '/favourite/remove';
    } else {
      params = { user_id: props.user, drug_id: drugId };
      route = '/favourite/add';
    }
    Promise.all([
      axios.post(route, params),
    ]).then((data) => {
      (favourite) ? setFavourite("") : setFavourite(data[0].data.id);
    })
  }

  return (
    <div className="drug">
      <ArrowBackIcon size='large' onClick={() => navigate('/search')} />
      {content.map((data) => (
        <>
        <h1>HEADING</h1>
        <p>{data}</p>
        </>))}
      {!favourite &&
        (<div onClick={changeLike}>Click me to favourite this drug</div>)}
      {favourite &&
        (<div onClick={changeLike}>Click me to unfavourite
        </div>)}
    </div>
  )
}

export default Drug
