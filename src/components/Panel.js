import React from 'react';
import PropTypes from 'prop-types';

function Panel(props) {
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="col-md-4 mx-auto">
          <div className="panel">
            <label className="switch" id="date-switch">
              <input
                type="checkbox"
                checked={props.dateOn}
                onChange={props.toggleDate}
              />
              <span className="slider round" />
            </label>
            <label htmlFor="date-switch" className="panel-switch-text">
              <i className="fa fa-calendar" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

Panel.defaultProps = {
  dateOn: new Date(),
  toggleDate: () => {}
};

Panel.propTypes = {
  dateOn: PropTypes.object,
  toggleDate: PropTypes.func
};

export default Panel;
