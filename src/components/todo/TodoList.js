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