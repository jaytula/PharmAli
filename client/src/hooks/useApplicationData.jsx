import axios from "axios";
import { useState } from 'react'

export default function useApplicationData(DRUG, HOME) {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");
  const [user, setUser] = useState();

  const onSubmit = (text) => {
    return Promise.all([
      axios.get(`https://api.fda.gov/drug/label.json?search=description:${text}`)
    ]).then((data) => {
      setPage(DRUG);
      setDrugContent(data);
    })
  }

  const setCookie = (email, password) => {
    const obj = { email, password };
    return axios.post("/add", obj, {
      withCredentials: true,
    })
      .then((data) => {
        const success = data.data.message;
        if (success) {
          setUser(email)
        }
        return success;
      })
  };

  const removeCookie = async () => {
    return axios.post("/remove", {
      withCredentials: true,
    })
      .then(() => { setUser("") })
  };

  return { page, menu, user, drugContent, setMenu, setPage, setCookie, removeCookie, onSubmit }
}