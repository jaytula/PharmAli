import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const Drug = (props) => {
  // favourite will be the saved_medication id
  const [favourite, setFavourite] = useState("");

  // First time page is visited
  useEffect(() => {
    Promise.all([
      axios.get(`/favourite/${props.user_id}&${props.content.drug_id}`),
    ]).then((data) => {
      setFavourite(data[0].data[0].id)
    })
  }, []);

  // Every time drug is favourited
  const changeLike = () => {
    let params;
    let route;
    console.log('I AM HGERE')
    if (favourite) {
    console.log('I AM HGERE NOWWWWWW')
      params = { favourite };
      route = '/favourite/remove';
    } else {
      params = { user_id: props.user_id, drug_id: props.content.drug_id };
      route = '/favourite/add';
    }
    Promise.all([
      axios.post(route, params),
    ]).then((data) => {
      (favourite) ? setFavourite("") : setFavourite(data[0].data.id);
    })
  }

  return (
    <div>
      <ArrowBackIcon size='large' onClick={() => props.setPage("SEARCH")} />
      {/* {props.content[0].data.results[0].overdosage[0].replace('10 OVERDOSAGE ', '')} */}
      {!favourite &&
        (<div onClick={changeLike}>Click me to favourite this drug</div>)}
      {favourite &&
        (<div onClick={changeLike}>Click me to unfavourite
        </div>)}
    </div>
  )
}

export default Drug
