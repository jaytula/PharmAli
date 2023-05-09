import React, { useState, useEffect } from 'react';
import useApplicationData from "../hooks/useApplicationData";
export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { getCookie } = useApplicationData();


  useEffect(() => {
    getCookie()
      .then((data) => {
        setUser(data.data.user_id);
      })
  }, [getCookie])

  const contextValue = {
    user
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };