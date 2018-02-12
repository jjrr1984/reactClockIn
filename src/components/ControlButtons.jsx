import React from "react";
import PropTypes from 'prop-types';

class ControlButtons extends React.Component{
    render(){
        return (
            <div className="halfComponent">
                <div className="buttonsContainer">
                    <button onClick={this.props.onClockInClicked} disabled={this.props.clockInDisabled}>Clock In</button>
                    <button onClick={this.props.onBreakInClicked} disabled={this.props.breakInDisabled}>Break In</button>
                    <button onClick={this.props.onBreakOutClicked} disabled={this.props.breakOutDisabled}>Break Out</button>
                </div>
            </div>
        );
    }
}

ControlButtons.propTypes = {
    "onClockInClicked": PropTypes.func,
    "onBreakInClicked": PropTypes.func,
    "onBreakOutClicked": PropTypes.func,
    "clockInDisabled": PropTypes.string,
    "breakInDisabled": PropTypes.string,
    "breakOutDisabled": PropTypes.string
}

export default ControlButtons;
