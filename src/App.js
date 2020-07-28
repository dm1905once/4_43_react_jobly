import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);

  React.useEffect(()=> {
    (localStorage.getItem("_token"))? doAuthenticate(): undoAuthenticate();
  },[])

  function doAuthenticate(){
    setIsAuthenticated(true);
  }

  function undoAuthenticate(){
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <div>
        <NavBar isAuthenticated={isAuthenticated}/>
        <Routes doAuthenticate={doAuthenticate} undoAuthenticate={undoAuthenticate}/>
      </div>
    </div>
  );
}

export default App;
