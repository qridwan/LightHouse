import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Order from "./Components/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    photo: "",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*"></Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
