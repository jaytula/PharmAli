import axios from "axios";
import { useState } from 'react'

export default function useApplicationData(DRUG, HOME) {
const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");

  const onSubmit = (text) => {
    Promise.all([
      axios.get(`https://api.fda.gov/drug/label.json?search=description:${text}`)
    ]).then((data) => {
      setPage(DRUG);
      setDrugContent(data);
    })
  }

  return { page, menu, drugContent, setMenu, setPage, onSubmit }
}