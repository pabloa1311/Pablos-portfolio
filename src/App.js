import React from "react"
import Header from "./components/Header.js"
import Home from "../src/pages/Home"
import Footer from "../src/components/Footer"
import MyWork from "../src/pages/MyWork"


import {
  Switch,
  Route,
} from "react-router-dom";

function App() {    
  return (
      <div>
          <Header />
          <Home />
          <MyWork />
          {/* <Switch>
              <Route exact path="/">
                  <Photos />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
          </Switch> */}
          <Footer />
          
      </div>
  )
}

export default App