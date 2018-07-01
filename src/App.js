import React, { Component } from 'react';
import DisplayWindow from './DisplayWindow';
import axios from 'axios';
import './App.css';

// const styles = {
//   width: '200px',
//   height: '200px',
//   border: '2px solid purple'
// };

const styles = (color) => {
  return {
    border: `2px solid ${color}`
  };
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello',
      fruit: ''
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(item) {
    axios.post(`http://localhost:1717/${item}`, { fruit: 'lemon' })
    .then((response) => {
      console.log(response.data);
      this.setState({ fruit: response.data });
    });
  }

  render() {
    let borderColor = 'black';
    if (this.state.fruit === 'lemon') {
      borderColor = 'yellow';
    } else if (this.state.fruit === 'blueberry!') {
      borderColor = 'green';
    }

    return (
      <div className="App" style={styles(borderColor)}>
        { this.state.message }
        <button onClick={() => { this.buttonHandler('apple') }}>Click me!</button>
        <button onClick={() => { this.buttonHandler('blueberry')}}>Click me!</button>
        <DisplayWindow fruit={this.state.fruit} />
      </div>
    );
  }
}


export default App;
