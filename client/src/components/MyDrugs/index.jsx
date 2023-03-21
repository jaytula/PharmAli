import { useEffect, useState } from "react"
import axios from "axios"

const MyDrugs = (props) => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/favourite/${props.user_id}`),
    ]).then((data) => {
      setDrugs(data[0].data)
    })
  }, []);

  return (
    <>
      {drugs.map((drug) => (
        <div>
          {drug.drug_id}
        </div>
      ))}
    </>
  )
}

export default MyDrugs
