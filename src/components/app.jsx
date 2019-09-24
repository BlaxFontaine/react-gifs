import React, { Component } from 'react';
import giphy from 'giphy-api';
import ReactDOM from 'react-dom';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "WQxkpI7LTStUExhrR7"
    };

  }

  search = (query) => {
    giphy("rorNDyivxYUXgP1DLP67hxJZCpeg1ngh").search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({gifs: res.data});
    });

  }

  gifClick = (id) => {
    this.setState({ selectedGifId: id});
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search = {this.search}/>
          <div className="selected-gif">
            <Gif id = {this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs} gifClick = {this.gifClick}/>
        </div>
      </div>
    );
  }
}

export default App;
