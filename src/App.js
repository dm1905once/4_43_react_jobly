import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);

  React.useEffect(()=> {
    if (localStorage.getItem("_token")){
      //***** Question!!! *** */
      // This is where I should be able to verify the token
      // But, the server does not provide a verify route (only middleware)
      // How could I possibly decode the token from the client? Am I missing something?
      doAuthenticate();
    } else {
      undoAuthenticate();
    }
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
