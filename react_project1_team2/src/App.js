import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Highlights from './components/Highlights';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import SocialMedia from './components/social_media';

import OlympicsGame from './components/OlympicsGame';
import OlympicsGamesNext from './components/upcomingOlympics';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:'#f0faf7'}}>
        <Header/>
        
        
        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="winterOlympicsGame">
          <OlympicsGame/>
        </Element>

        <Element name="highlights">
          <Highlights/>
        </Element>

        <Element name="upcomingOlymics">
          <OlympicsGamesNext/>
        </Element>


        <Element name="location">
          <Location/>
        </Element>        

        <Element name="social_media">
          <SocialMedia/>
        </Element>

        
        <Footer/>
      </div>
    );
  }
}

export default App;