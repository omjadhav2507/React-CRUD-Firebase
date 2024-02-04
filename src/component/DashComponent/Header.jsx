import React from 'react'
import Logout from '../Logout'

function Header({setIsAuthenticated , setIsAdding}) {
  return (
    <>
    <div>
        <h1>Employee management Software</h1>
        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button style={{marginRight:'20px' }} onClick={()=>setIsAdding(true)}>Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated}/>

        </div>
        

    </div>
    </>
  )
}

export default Header