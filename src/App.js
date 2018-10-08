import React, { Component } from 'react';
import Header from './components/Header';
import Image from './components/Images/Image'
import PlayingPanel from './components/PlayingPanel';
import ButtonsPanel from './components/ButtonsPanel';
import Rules from './components/Rules';
import './App.css';

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Idaho', 'Hawaii', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
  'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attemptsleft: 3,
      status: 'playing',
      enteredValue: [' '],
      guessWord: ((states[Math.floor(Math.random() * states.length)]).toLocaleLowerCase()).split(''),
      showRules: false,
      value: [],
      fetchedPuzzle: [],
      category: 'USA States'
    }
    this.fetchPuzzle = this.fetchPuzzle.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleWinnerorLooser = this.handleWinnerorLooser.bind(this);
  }

  handleReset = () => {
    this.setState({
      attemptsleft: 3,
      status: 'playing',
      enteredValue: [' '],
      guessWord: ((states[Math.floor(Math.random() * states.length)]).toLocaleLowerCase()).split(''),
      showRules: false,
      fetchedPuzzle: [],
      value: [],
      category: this.state.category
    });
  }

  handleRuleShow = () => {
    const doesShow = this.state.showRules;
    this.setState({ showRules: !doesShow });
  }

  handleErase = (event) => {
    if (event.keyCode === 8) {
      event.preventDefault();
    }
  }

  handleChange = (event) => {
    let text = event.target.value;
    let arr = this.state.enteredValue;
    let guess = (text[text.length - 1]);
    if (this.state.status === 'won!' || this.state.attemptsleft === 0) {
      event.preventDefault();
    }
    else if (this.state.enteredValue.includes(guess)) {
      alert('The letter was entered previously');
      event.preventDefault();
    }
    else {
      this.setState({ value: event.target.value.split() });
      arr.push(guess);
      this.setState({ enteredValue: arr });
      this.handleStatus(guess);
      this.handleWinnerorLooser(); 
    }
  }

  handleStatus = (guess) => {
    if (!this.state.guessWord.includes(guess)) {
      this.setState({ attemptsleft: this.state.attemptsleft - 1 });
    }
    this.fetchPuzzle();
  }

  fetchPuzzle = (event) => {
    let puzzle = [...this.state.guessWord];
    let word = '';
    puzzle.forEach(currentItem => {
      if (this.state.enteredValue.includes(currentItem)) { word += currentItem }
      else { word += '*' }
    });
    return word;
  }

  handleWinnerorLooser = () => {
    let puzzle = [...this.state.guessWord];
    let enteredLeters = [...this.state.enteredValue];
    if (puzzle.includes(' ')) {
      let index = puzzle.indexOf(' ')
      puzzle.splice(index, 1);
    }
    let finished = puzzle.every((letter) => enteredLeters.includes(letter))
    if (finished) {
      this.setState({ status: 'won!' })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ButtonsPanel reset={this.handleReset} show={this.handleRuleShow} guessCountries={this.handleCountries} />
        {
          this.state.showRules === true ?
            <Rules /> : null
        }
        <Image attempts={this.state.attemptsleft} gameSatus={this.state.status} />
        <PlayingPanel attemptsleft={this.state.attemptsleft} fetchedGuessWord={this.fetchPuzzle()} category={this.state.category}
          onKeyDown={this.handleErase.bind(this)} onType={this.handleChange.bind(this)} value={this.state.enteredValue} />
      </div>
    );
  }
}

export default App;
