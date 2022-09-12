import React, { Component } from "react";
import Resume from './components/Resume';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Resume />
      </div>
    )
  }
}

export default App;