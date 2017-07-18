import React from 'react';

export const TodoItem = (props) => {
    return(
        // Need a key property when using an array or iterator
        <li> 
          <input type="checkbox"  defaultChecked={props.isComplete}/>
            {props.name}
        </li> 
    );    
};