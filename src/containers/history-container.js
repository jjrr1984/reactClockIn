import { connect } from 'react-redux';
import history from "../components/History";

const mapStateToProps = state => {
    return{
        "actions":state.history.messages
    };
};

const mapDispatchToProps = dispatch => {
    return{}
};

const historyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(history);

export default historyContainer;
