import React from "react"
import Header from "./components/Header.js"
import Home from "../src/pages/Home"
import Footer from "../src/components/Footer"
import MyWork from "../src/pages/MyWork"
import MyWorkDetails from "../src/pages/MyWorkDetails"


import {
  Switch,
  Route,
} from "react-router-dom";

function App() {    
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/mywork">
                <MyWork />  
              </Route>
              <Route path="/mywork/:myworkId">
                <MyWorkDetails />
              </Route>
          </Switch>
          <Footer />
          
      </div>
  )
}

export default App