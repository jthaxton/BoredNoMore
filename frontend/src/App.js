import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Root from './components/root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Root />
        </HashRouter>
      </div>
    );
  }
}

export default App;
