import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/FrnpqArQZtti8/giphy.gif?cid=790b7611408f4757a9ac354a777d947a41fb65f0da21c728&rid=giphy.gif";
    return (
      <img className = "gif" src={src} alt=""/>
      );
  }
}

export default Gif;
