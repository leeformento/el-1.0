import React, { Component } from 'react';
import './App.css';
import NavBar from './Nav/NavBar'
import MainHero from './Hero/MainHero'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-sec">
          <NavBar />
          </div>
          <div className="hero-img">
      <MainHero />


      </div>
      </div>
    );
  }
}

export default App;
