import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.gifClick) {
      this.props.gifClick(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className = "gif" src={src} alt="" onClick={this.handleClick}/>
      );
  }
}

export default Gif;
