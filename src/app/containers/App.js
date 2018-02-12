import React from "react";
import { User } from "../components/User";
import { Main } from "../components/Main";
import { TrackList } from "../components/TrackList";
import { connect } from "react-redux";
import { setName, setAge } from "../actions/userActions";
import { setTrack, filterList, deleteTrack } from "../actions/trackAction";

class App extends React.Component {
  render() {
    console.log(this.props.tracks.nameSong)
    return (
      <div className="container">
        <Main
          changeUsername={() => this.props.setName("Anna")}
          changeUserage={() => this.props.setAge(33)}
        />
        <User username={this.props.user.name} age={this.props.user.age} />
        <TrackList filterList={this.props.filterList} tracks={this.props.tracks}
          filter={this.props.filter} setTrack={this.props.setTrack} deleteTrack={this.props.deleteTrack} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math,
    tracks: state.tracks,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    setAge: age => {
      dispatch(setAge(age));
    },
    setTrack: nameSong => {
      dispatch(setTrack(nameSong))
    },
    filterList: list => {
      dispatch(filterList(list))
    },
    deleteTrack: track => {
      dispatch(deleteTrack(track))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);