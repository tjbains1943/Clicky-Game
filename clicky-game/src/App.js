import React, { Component } from 'react';
import Navbar from './Components/Navbar/navbar'
import './App.css';
import Container from './Components/Game-Container/contain'
import choices from './choices.json'
import Card from './Components/Card/card'

class App extends Component {
  state = {
    choices
  };

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Container>
        {this.state.choices.map(choice => (
          <Card
            image={choice.image}
            key={choice.image}
          />
        ))}
      </Container>

      </div>
    );
  }
}

export default App;
