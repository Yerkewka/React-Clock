import React, { Component } from 'react';
import Datetime from '../lib/Datetime';

class Display extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div className="col-md-4 mx-auto">
            <div className="display">
              <div className="display-time">
                {Datetime.toTimeString(this.props.date)}
              </div>
              {this.props.isDateVisible && (
                <div className="display-date">
                  {Datetime.toDateString(this.props.date)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
