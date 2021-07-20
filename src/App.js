import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import './App.css'
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <title>SebastianAlegrett</title>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/aboutme" />
          </Route>
          <Route path='/aboutme' exact component={AboutMe} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
