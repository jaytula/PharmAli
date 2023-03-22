import axios from "axios";
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";


export default function useApplicationData() {
  const [menu, setMenu] = useState(false);
  const [drugContent, setDrugContent] = useState();
  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  // const navigate = useNavigate();

  const onSearchSubmit = (drug) => {
    // navigate(`/drugs/${drug.id}`);
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
      if (success instanceof Object) {
        setUser(success.userInfo);
      }
      return success;
    })
  };

  const removeCookie = () => {
    return axios.post("/user/logout")
      .then(() => { setUser(null) })
  };

  const getCookie = () => {
    return axios.get("/user")
  }

  return { menu, drugContent, user, darkMode, setMenu, setCookie, removeCookie, getCookie, onSearchSubmit, setDarkMode }

}