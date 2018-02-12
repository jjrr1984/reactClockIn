import React from "react";
import PropTypes from 'prop-types';

class History extends React.Component{
    render(){
        const listOfActions = this.props.actions.map((action,index) => <li key={index}>{action}</li>);
        return(
            <div className="halfComponent">
                <ul>
                    {listOfActions}
                </ul>
            </div>
        );
    }
}

History.propTypes = {
    "actions": PropTypes.arrayOf(PropTypes.string)
}

export default History;
