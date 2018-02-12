import status from "./status-reducer";
import history from "./history-reducer";
import {combineReducers} from "redux";

const globalReducer = combineReducers({
    status,history
});

export default globalReducer;
