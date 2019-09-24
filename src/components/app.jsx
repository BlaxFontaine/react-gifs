import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    const gifs = [
      { id: "k1SuVPEuA89S8" },
      { id: "WQxkpI7LTStUExhrR7" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="FrnpqArQZtti8"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {gifs} />
        </div>
      </div>
    );
  }
}

export default App;
