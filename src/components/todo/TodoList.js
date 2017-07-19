import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
    return(
        <div className="Todo-List">
            <ul>
              {props.todos.map(todo => 
              // Using the spread operator to get propertie rather than .id etc
                <TodoItem key={todo.id} {...todo}/>
              )}
            </ul>
        </div>
    );    
};

    // React.PropTypes is deprecated since React 15.5.0 -  npm module prop-types
    TodoList.propTypes = {
        todos:  React.PropTypes.array.isRequired     
        
    };