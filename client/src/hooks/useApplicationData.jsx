import axios from "axios";
import { useState, useEffect } from 'react'

export default function useApplicationData(DRUG, HOME) {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");
  const [user, setUser] = useState({});
  const [blogContent, setBlogContent] = useState();
  const [drugList, setDrugList] = useState([]);

  const onSearchSubmit = (text) => {
    return Promise.all([
      axios.get(`https://api.fda.gov/drug/label.json?search=description:${text}`)
    ]).then((data) => {
      setPage(DRUG);
      setDrugContent(data);
    })
  }

  const setCookie = (userInfo) => {
    // Set up the userinfo to send and request type (get, post)
    let makeRequest;
    if (userInfo.name) {
      makeRequest = axios.post("/user/register", userInfo)
    } else {
      makeRequest = axios.post("/user/login", userInfo)
    }
    return makeRequest.then((data) => {
      const success = data.data.message;
      console.log("success",success)
        if (success instanceof Object) {
          setUser(success);
        }
        return success;
      })
  };

  const removeCookie = () => {
    return axios.post("/user/logout")
      .then(() => { setUser({}) })
  };

  useEffect(() => {
    Promise.all([
      axios.get('/user'),
      axios.get('/drugs')
    ]).then((data) => {
      console.log("useEffect",data)
      setUser(data[0].data);
      
      setDrugList(data[1].data);
    })
  }, []);
  
  return { page, menu, user, drugList, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent }
}