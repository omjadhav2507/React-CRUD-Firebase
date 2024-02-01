import React from 'react'
import Logout from './Logout'

function DashUI({ setIsAuthenticated}) {
  return (
    <>
    <div>DashUI</div>
    <Logout setIsAuthenticated={setIsAuthenticated}/>
    </>
  )
}

export default DashUI