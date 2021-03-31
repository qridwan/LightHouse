import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AddBook from "./Components/AddBook/AddBook";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import PrivateRoute from "./Components/PricvateRoute/PrivateRoute";

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    photo: ""
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <div>
       <Navigation/>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/add-book">
            <AddBook /> 
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;