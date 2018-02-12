import React from "react";

export class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              className="btn btn-primary"
              onClick={() => this.props.changeUsername()}
            >
              Change the Username
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.props.changeUserage(33)}
            >
              Change the Userage
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              style={{marginTop: "20px"}}
              className="btn btn-primary"
              onClick={() => this.props.setAlarm({ lat: 40, lon: 40})}
            >
              Set Alarm . . .
            </button>
          </div>
        </div>
      </div>
    );
  }
}
