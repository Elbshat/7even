import React, { Component } from 'react';
import Home from './../Home/Home';
import Work from './../Work/Work';
import Portfolio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import About from './../About/About';
import SocialMedia from './../SocialMedia/SocialMedia';
import Footer from './../Footer/Footer';
import Contact from '../Contact/Contact';




class Page_1 extends Component {
  render() {
  return (
    <div className="Page_1">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
  }
}

export default Page_1;
