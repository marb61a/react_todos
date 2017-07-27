import React from 'react';

export const TodoItem = (props) => {
    const handleToggle = props.handleToggle.bind(null, props.id);
    
    return(
        // Need a key property when using an array or iterator
        <li> 
          <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/>
            {props.name}
        </li> 
    );    
};

  // React.PropTypes is deprecated since React 15.5.0 -  npm module prop-types
  TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
    
  };