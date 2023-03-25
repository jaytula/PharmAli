import axios from "axios";
import { useState } from 'react'

export default function useApplicationData() {

  const setCookie = (userInfo) => {
    // Set up the userinfo to send and request type (get, post)
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

  return { setCookie, removeCookie, getCookie }

}