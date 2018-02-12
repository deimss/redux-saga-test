import React from "react";

export class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.filterInput = this.filterInput.bind(this);
  }
  deletecurrentTrack (nameSong) {
    let newList = this.props.tracks.filter( item => {
     if(nameSong === item){
      return false;
    }
     else {
      return true;
     }
    })
    console.log('event target', nameSong)
  //  console.log('new list',newList)
   this.props.deleteTrack(newList);
  }
  handleInput() {
    if (this.trackInput.value === "") {
      alert("Please set right track name!")
      return;
    }
    this.props.setTrack(this.trackInput.value);
    this.trackInput.value = "";
    console.log(this.trackInput.value);
  }
  filterInput() {
    let filteredList = this.props.tracks.filter(item => {
      return item.toLowerCase().search(this.searchInput.value.toLowerCase()) !== -1;
    });
    if(this.searchInput.value.length === 0){
      this.props.filterList('');
    }else {
      this.props.filterList(filteredList);
    }
  }
  render() {
    var divStyle = {
      display: 'flex'
    };
    return (
      <div>
        <input type="text" ref={(input) => { this.trackInput = input }} />
        <button onClick={() => this.handleInput()}>Add track</button>
        <br/>
        <input type="text" onChange={() => this.filterInput()} ref={(input) => { this.searchInput = input }} />
        <ul>
          {this.props.filter.length === 0 ? this.props.tracks.map((nameSong, index) => {
            return  <div style={divStyle} key={index+1} >
                      <li key={index} ref={(track) => { this.currentTrack = track}} value={nameSong} >{nameSong}</li>
                      <button onClick={(event) => this.deletecurrentTrack(nameSong)} >delete</button>
                    </div>
          }): this.props.filter.map((nameSong, index) => {
            return  <div style={divStyle} key={index+1}>
                        <li key={index}>{nameSong}</li>
                        <button onClick={() => this.deletecurrentTrack()}>delete</button>
                    </div>
          })
          }
        </ul>
        <button></button>
      </div>
    );
  }
}
