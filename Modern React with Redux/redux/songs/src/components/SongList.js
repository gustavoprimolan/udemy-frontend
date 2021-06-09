import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //IT WILL GET mapStateToProp return;
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//THE NAME IS A CONVETION
//EVERY TIME EXECUTE SELECT BUTTON THIS METHOD SHOULD RERUN
const mapStateToProp = (state) => {
  console.log(state);

  return { songs: state.songs };
};

//connect will get the reducer exported and execute mapStateToProp function to SongList Component
export default connect(mapStateToProp, { selectSong })(SongList);
