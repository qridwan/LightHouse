import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AddBook from "./Components/AddBook/AddBook";
import Home from "./Components/Home/Home";


function App() {

  return (
    <Router>
      <div>
       {/* <Nav/> */}

        <Switch>
          <Route path="/login">
            {/* <Login/> */}
          </Route>
          <Route path="/event">
            {/* <Event/> */}
          </Route>
          <Route path="/add-book">
            <AddBook /> 
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;