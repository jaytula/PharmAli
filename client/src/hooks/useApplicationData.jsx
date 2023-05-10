import axios from "../axiosInstance";
import { useState } from 'react';

export default function useApplicationData() {
  // All universeal states
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [allBlogs, setAllBlogs] = useState([]);
  const [drugs, setDrugs] = useState([]);

  const setCookie = (userInfo) => {
    // Makde request to login/register
    let makeRequest;
    if (userInfo.name) {
      makeRequest = axios.post("/user/register", userInfo)
    } else {
      makeRequest = axios.post("/user/login", userInfo)
    }
    return makeRequest
  };

  const removeCookie = () => {
    return axios.post("/user/logout")
  };

  const getCookie = () => {
    return axios.get("/user")
  }

  return { user, setUser, userInfo, setUserInfo, allBlogs, setAllBlogs, drugs, setDrugs, setCookie, removeCookie, getCookie };

}