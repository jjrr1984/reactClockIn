import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from "./reducers/index.js"

let store = createStore(globalReducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById("app")
);

console.log(store.getState());

store.subscribe(function(){
    console.log(store.getState());
});
