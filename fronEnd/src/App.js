import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import Cats from "./Components/Cats/Cats"
import Nav from "./Components/Navbar/Nav";
import AddCats from "./Components/Cats/AddCats";
import Card from './Components/Cats/Card';

export default function App() {
  const [token, setToken] = useState("");
  useEffect(() => { 
    if (!token) {
        const mytoken = JSON.parse(localStorage.getItem("token"))
        setToken(mytoken)
    }

}, [])

  return (
    <div>
      <Nav token={token} setToken={setToken} />
    
       <Route exact path="/" component={Home} />

     <Route   exact path="/SignUp" component={SignUp} />
     <Route  exact   path="/Cats" render={() => { return <Cats token={token} />;}} />
     <Route  exact   path="/AddCats" render={() => { return <AddCats token={token} />;}} />
     <Route  exact  path="/Card" render={() => {   return <Card setToken={setToken} token={token} />; }} />
     <Route exact path= "/login" render={() => ( <Login setToken = {setToken}  />  )
      }/>

    </div>
  );
}

