import React, { Component } from 'react';
import request from 'request';
import Bibliotheque from './components/Bibliotheque';
import './App.css';

class App extends Component {

state = {
  books: []
}

componentDidMount() {
  request('http://localhost:3005/', (err, res, body) => {
    if (err) return console.log(err);
    if (body) {
      this.setState({
        books: JSON.parse(body)
      });
    }
  })
}

  render() {
    return (
      <div>
        <Bibliotheque displayBooks={this.state.books}/>
      </div>
    );
  }
}

export default App;
