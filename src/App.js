import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from '../src/component/number-input.js';
import Results from '../src/component/results';


export default class App extends Component {
  //pass props to constructor when pulling from parent component
  //and used to set up state
  //use constructor to set up the state otherwise.
  constructor() {
    super();
    this.state = { currentGuess: '', 
    correctAnswer: Math.floor((Math.random() * 105) + 1), 
    guessList: [],
    feedback: ''};
  }

  setValue (newValue){
    this.setState({currentGuess: newValue});
    this.setGuessList(newValue);
    this.setFeedback(newValue);    
    //checkNumber(newValue)
  }

  setGuessList(num) {
    this.state.guessList.push(num);
    console.log(this.state.guessList);
  }
  
  setFeedback(num){
    let difference = this.state.correctAnswer - num;
    if (difference === 0){
      this.setState({feedback: `Correct!`});
    }

    else if( difference < 10){
      this.setState({feedback: `Warm!`});
    }
    else if (difference > 10){
      this.setState({feedback: `Cold`});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot And Cold</h1>
        </header>
        <p className="App-intro">
          Guess the number and we'll tell you if you're right!
        </p>
        <Input setValue={value =>this.setValue(value)} />
      <Results result={this.state.feedback}/>
      </div>
    );
  }
}


