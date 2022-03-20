import {React, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css'


function App() {
  useEffect(() => {
    document.title = "Sebastian Alegrett"
  }, [])
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
