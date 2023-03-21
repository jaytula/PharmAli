import axios from "axios";
import { useState, useEffect } from 'react'

export default function useApplicationData(DRUG, HOME) {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");
  const [user, setUser] = useState();
  const [blogContent, setBlogContent] = useState();

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
      console.log(success)
        if (success instanceof Object) {
          setUser(success.userInfo.id);
        }
        return success;
      })
  };

  const removeCookie = () => {
    return axios.post("/user/logout")
      .then(() => { setUser("") })
  };

  useEffect(() => {
    Promise.all([
      axios.get('/user'),
    ]).then((data) => {
      setUser(data[0].data.message);
    })
  }, []);
  
  return { page, menu, user, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent }
}