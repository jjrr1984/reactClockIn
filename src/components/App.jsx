import React from "react";
import ControlButtons from "../containers/control-buttons-container";
import History from "../containers/history-container";
import "../css/main.css";

class App extends React.Component{
    
    render(){
        return (
            <div>
                <ControlButtons/>
                <History/>
            </div>
        );
    }
    
}

export default App;
