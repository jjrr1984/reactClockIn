import { connect } from 'react-redux';
import controlButtons from "../components/ControlButtons";
import {doClockIn,doBreakIn,doBreakOut} from "../actions/actions";

const mapStateToProps = state => {
    return{
        "clockInDisabled":state.status.clockInDisabled,
        "breakInDisabled":state.status.breakInDisabled,
        "breakOutDisabled":state.status.breakOutDisabled
    };
};

const mapDispatchToProps = dispatch => {
    return{
        "onClockInClicked": () => {
            dispatch(doClockIn(new Date()))
        },
        "onBreakInClicked": () => {
            dispatch(doBreakIn(new Date()))
        },
        "onBreakOutClicked": () => {
            dispatch(doBreakOut(new Date()))
        }
    }
};

const controlButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(controlButtons);

export default controlButtonsContainer;
