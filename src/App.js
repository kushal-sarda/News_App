import './App.css';
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key="general" pageSize={14} country="in" category="general" /></Route>
            <Route exact path="/science"><News key="science" pageSize={14} country="in" category="science" /></Route>
            <Route exact path="/busniess"><News key="business" pageSize={14} country="in" category="business" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={14} country="in" category="sports" /></Route>
            <Route exact path="/health"><News key="health" pageSize={14} country="in" category="health" /></Route>
            <Route exact path="/technology"> <News key="technology" pageSize={14} country="in" category="technology" /></Route>
            <Route exact path="/entertaintment"> <News key="entertaintment" pageSize={14} country="in" category="entertaintment" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}




