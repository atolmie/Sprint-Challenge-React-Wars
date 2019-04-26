import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <ul>
        {this.state.starwarsChars.map(function (data, index) {
          return (
            <li key={index}>
              <h1 className="name">{data.name}</h1>
              <h2 className="films">{data.films}</h2>
              <h2 className="birthYear">{data.birth_year}</h2>
              <h2 className="gender">{data.gender}</h2>
            </li>
          )
        }
        )}
      </ul>
    );
  }
}

export default App;
