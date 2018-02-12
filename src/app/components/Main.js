import React from "react";
import { Link } from 'react-router';



export class Main extends React.Component {
  render() {
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
              onClick={() => this.props.setAlarm({
                "alert": {
                  "message": "from saga",
                  "latitude": 40,
                  "longitude": 40,
                  "unique_wristo_id": "14"
                }})}
            >
              Set Alarm . . .
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Link to="/other">link to other page</Link>
          </div>
        </div>
      </div>
    );
  }
}
