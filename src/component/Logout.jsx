import React from 'react'
import { getAuth, signOut } from "firebase/auth";

function Logout({setIsAuthenticated}) {

    const handleLogout =()=>{
      const auth = getAuth();
      signOut(auth).then(() => {
        setIsAuthenticated(false);
      }).catch((error) => {
        console.log(error)
      });
    
    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout