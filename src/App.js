import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Characters from './Components/Characters/Characters';
import About from './Components/About/About';
import Archive from './Components/Archive/Archive';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/characters" component={Characters} />
            <Route path="/about" component={About} />
            <Route path="/archive" component={Archive} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
