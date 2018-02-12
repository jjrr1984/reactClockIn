import {CLOCK_IN,BREAK_IN,BREAK_OUT} from "../actions/actionTypes";
import moment from "moment";
import {WORKING_HOURS} from "../constants/globals";

const initialState = {
    "messages":[]
};

const history = (state = initialState,action) => {
    let newMessage,newMessages,newHistory,leaveTime;
    switch(action.type){
        case CLOCK_IN:
        const clockInTime = moment(action.date);
        leaveTime = clockInTime.clone().add(WORKING_HOURS,"h");
        newMessage = `You started working at ${clockInTime.format("HH:mm")}`;
        newHistory = {
            "clockInTime": clockInTime,
            "leaveTime": leaveTime,
            "messages": [newMessage]
        };
        return Object.assign({},state,newHistory);
        case BREAK_IN:
        const breakInTime = moment(action.date);
        newMessage = `You started a break at ${breakInTime.format("HH:mm")}`;
        newMessages = Array.from(state.messages);
        newMessages.push(newMessage);
        newHistory = {
            "breakInTime":breakInTime,
            "messages":newMessages
        };
        return Object.assign({},state,newHistory);
        case BREAK_OUT:
        const breakOutTime = moment(action.date);
        leaveTime = state.leaveTime.add(breakOutTime.diff(state.breakInTime),"ms");
        newMessage = `You finished a break at ${breakOutTime.format("HH:mm")}. You can leave the office at ${leaveTime.format("HH:mm")}`;
        newMessages = Array.from(state.messages);
        newMessages.push(newMessage);
        newHistory = {
            "breakOutTime":breakOutTime,
            "messages":newMessages
        };
        return Object.assign({},state,newHistory);
        default:
        return state;
    }
}

export default history;
