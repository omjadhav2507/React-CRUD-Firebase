import React from 'react'

function Logout({setIsAuthenticated}) {

    const handleLogout =()=>{
    localStorage.setItem('is_authenticated', false);
    setIsAuthenticated(false);
    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout