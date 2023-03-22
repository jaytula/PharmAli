import { useEffect, useState } from "react"
import axios from "axios"
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate, useParams } from "react-router-dom";

const MyDrugs = () => {
  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData()
  const navigate = useNavigate();

  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/favourite/${user.id}`),
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
