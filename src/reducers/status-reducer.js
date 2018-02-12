import {CLOCK_IN,BREAK_IN,BREAK_OUT} from "../actions/actionTypes";

const initialState = {
    "clockInDisabled": "",
    "breakInDisabled": "true",
    "breakOutDisabled": "true"
}

const status = (state = initialState,action) => {
    switch(action.type){
        case CLOCK_IN:
        return Object.assign({},state,{"clockInDisabled":"true","breakInDisabled":""});
        case BREAK_IN:
        return Object.assign({},state,{"breakInDisabled":"true","breakOutDisabled":""});
        case BREAK_OUT:
        return Object.assign({},state,{"breakInDisabled":"","breakOutDisabled":"true"});
        default:
        return state;
    }
}

export default status;
