import React from 'react';
import {partial} from '../../lib/utils.js'

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id);
    const handleRemove = partial(props.handleRemove, props.id)
    
    return(
        // Need a key property when using an array or iterator
        <li> 
          <span className='delete-item'>
            <a href='#' onClick={handleRemove}>X</a>
          </span>
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