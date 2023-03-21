import axios from "axios";
import { useState, useEffect } from 'react'

export default function useApplicationData(DRUG, HOME) {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState(HOME);
  const [drugContent, setDrugContent] = useState("");
  const [user, setUser] = useState({});
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
      console.log(data)
      const success = data.data.message;
        if (success instanceof Object) {
          setUser(success.userInfo);
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
      axios.get('/user')
    ]).then((data) => {
      // Only set a user if a cookie exists
      console.log(data[0].data.message);
      if (data[0].data.message) {
        setUser(data[0].data.message);
      }
    })
  }, []);
  
  return { page, menu, user, blogContent, drugContent, setMenu, setPage, setCookie, removeCookie, onSearchSubmit, setBlogContent }
}