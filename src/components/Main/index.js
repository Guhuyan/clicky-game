import React from "react";

class Main extends React.Component {
  state = {
    count: 0,
    clickItems: []
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

  render() {
    return (
      <div>
        <div>
          {this.state.clickItems.forEach(item => (
            //   Note to self: Remember to use JSX variable for the image. e.g. this.state.clickItems.imageUrl
            <div
              className="click-item"
              role="img"
              aria-label="click item"
              style="background-image=url('/assets/images/image01.png');"
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
