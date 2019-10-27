import React from "react";
import Nav from "../Navbar";

class Main extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    count: 0,
    clickItems: [
      "images/beth.png",
      "images/birdperson.png",
      "images/evilmorty.png",
      "images/gianthead.png",
      "images/goldenford.png",
      "images/jerry.png",
      "images/jessica.png",
      "images/meeseeks.png",
      "images/morty.png",
      "images/mr.png",
      "images/rick.png",
      "images/summer.png"
    ],
    correctGuesses: []
  };

  // handleIncrement increases this.state.count by 1 to keep track of how many consecutive correct guesses the user had guessed
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // This isn't working at the moment since event is not defined.  I am not exactly sure how the onClick() is referenced.
  // This checkGuess() method is supposed to set style equal to event.target.style (the value of the style tag) and check to see if
  // style is already in the correctGuesses array.  If it is, we'd set the score and count to 0, update the topScore with the count,
  // and empties out the correctGuesses array.  If style is not in the correctGuesses array, we'd call the handleIncrement method
  // to increment the count by 1, and "push" the style value into the correctGuesses array by spreading the array with the new value
  // via the setState() method.  Regardless of the conditional passing or failing, we also want to pass two props into the Nav
  // component to render it with the new values.
  // checkGuess = event => {
  //   let style = event.target.style;
  //   if (this.state.correctGuesses.includes(style)) {
  //     this.setState({ score: 0 });
  //     this.setState({ topScore: this.state.count });
  //     this.setState({ count: 0 });
  //     this.setState({
  //       correctGuesses: []
  //     });
  //     Nav(this.state.score, this.state.topScore);
  //   } else {
  //     this.handleIncrement();
  //     this.setState({
  //       correctGuesses: [...this.state.correctGuesses, event.target.style]
  //     });
  //     Nav(this.state.score, this.state.topScore);
  //   }
  // };

  shuffle = function(array) {
    let arr = array;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      // let t = arr[i];
      // arr[i] = arr[j];
      // arr[j] = t;

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.setState({ clickItems: arr });
  };

  render() {
    return (
      <main className="container">
        {this.state.clickItems.map(item => (
          <div
            className="click-item"
            role="img"
            aria-label="click item"
            style={{ backgroundImage: `url(${item})` }}
            onClick={() => {
              this.shuffle(this.state.clickItems);
              // this.checkGuess();
            }}
          ></div>
        ))}
      </main>
    );
  }
}

export default Main;
