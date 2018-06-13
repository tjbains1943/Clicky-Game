import React, { Component } from 'react';
import Navbar from './Components/Navbar/navbar'
import './App.css';
import Container from './Components/Game-Container/contain'
import choices from './choices.json'
import Card from './Components/Card/card'

class App extends Component {
  state = {
    choices: choices,
    score: 0,
    topScore: 0
  };
randomizeChoices() {
  const choices = this.state.choices.sort(function(a, b){return 0.5 - Math.random()});
  this.setState({ choices });
}

clickCount(e) {
    var id = e.target.getAttribute("id");
    var value = parseInt(e.target.getAttribute("value"), 10);
    document.getElementById(id).setAttribute("value", value + 1 );
    console.log(value);
    if (value === 2) {
      this.setState({topScore: this.state.score})
      this.setState({score: 0})

    }
    else {
      this.setState({score: this.state.score + 1})
    }
}
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Container>
        {this.state.choices.map(choice => (
          <Card
            name = {choice.name}
            count = {choice.clicks}
            clicks={this.clickCount.bind(this)}
            randomize={this.randomizeChoices.bind(this)}
            image={choice.image}
            key={choice.id}
            id={choice.id}
          />
        ))}
      </Container>

      </div>
    );
  }
}

export default App;
