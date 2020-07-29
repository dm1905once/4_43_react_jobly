import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import UserContext from './UserContext';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
  const [ appUser, setAppUser ] = React.useState({});

  React.useEffect(()=> {
    if (localStorage.getItem("_token")){
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  },[])

  function doAuth(userData){
    setAppUser(userData);
    setIsAuthenticated(true);
  }

  function undoAuth(){
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{doAuth, undoAuth, appUser}}>
        <NavBar isAuthenticated={isAuthenticated}/>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
