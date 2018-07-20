import React from "react";
import PropTypes from 'prop-types';
import {WORKING_HOURS} from "../constants/globals";

class ControlButtons extends React.Component{
	render(){
		return (
			<div className="halfComponent">
				<div className="buttonsContainer">
					<button onClick={this.props.onClockInClicked} disabled={this.props.clockInDisabled}>Clock In</button>
					<button onClick={this.props.onBreakInClicked} disabled={this.props.breakInDisabled}>Break In</button>
					<button onClick={this.props.onBreakOutClicked} disabled={this.props.breakOutDisabled}>Break Out</button>
				</div>
				<div className="numberOfHoursContainer">
					<span>Number of hours:</span>
					<span><input value={WORKING_HOURS} min=".5" max="24" name="workingHours" type="number" step=".5"></input></span>
					<span><button>Submit</button></span>
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
