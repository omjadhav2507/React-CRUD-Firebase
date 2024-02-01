import React, { useEffect, useState } from 'react';
import './App.css';
import DashUI from './component/DashUI';
import Login from './component/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <DashUI setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;