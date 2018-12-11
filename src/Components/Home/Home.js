import React, { Component } from 'react';

const comicsArray = [
  require('../../images/page1.jpg'),
  require('../../images/page2.jpg'),
  require('../../images/page3.jpg'),
  require('../../images/page4.jpg'),
  require('../../images/page5.jpg')
]

class home extends Component {

  state = {
    currentIndex: 0
  }

  nextImageHandler = () => {
    if (this.state.currentIndex < comicsArray.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    } else {
      this.setState({
        currentIndex: 0
      });
    }
  }

  lastImageHandler = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  }

  render() {
    return (
      <div id="background">
        <button className="button" id="previous" onClick={this.lastImageHandler}>
          <strong>&larr; Last Page</strong></button>
        <button className="button" id="next" onClick={this.nextImageHandler}><strong>Next Page &rarr;</strong></button>
        <img id="pages" src={comicsArray[this.state.currentIndex]} />
        <button className="button" id="previous" onClick={this.lastImageHandler}>
          <strong>&larr; Last Page</strong></button>
        <button className="button" id="next" onClick={this.nextImageHandler}><strong>Next Page &rarr;</strong></button>
      </div>
    );
  }
}
export default home;