import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page_1 from './Components/Page_1/Page_1';
import Contact from './Components/Contact/Contact';





class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'  component={Page_1}/>
      <Route exact path='/Contact'  component={Contact} />
    </BrowserRouter>
  );
  }
}

export default App;
