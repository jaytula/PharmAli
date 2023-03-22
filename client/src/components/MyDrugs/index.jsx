import { useEffect, useState } from "react"
import axios from "axios"
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate } from "react-router-dom";

const MyDrugs = () => {
  const { getCookie } = useApplicationData()
  const navigate = useNavigate();

  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    getCookie()
    .then((user) => {
      console.log(user.data.message.id);
      Promise.all([
        axios.get(`/favourite/${user.data.message.id}`),
      ]).then((data) => {
        setDrugs(data[0].data)
      })
    })
  }, []);

  return (
    <>
      {drugs.map((drug) => (
        <div onClick={() => navigate(`drugs/${drug.drug_id}`)}>
          {drug.drug_id}
        </div>
      ))}
    </>
  )
}

export default MyDrugs
