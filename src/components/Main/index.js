import React from "react";

class Main extends React.Component {
  state = {
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
    ]
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

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
            onClick={() => this.shuffle(this.state.clickItems)}
          ></div>
        ))}
      </main>
    );
  }
}

export default Main;
