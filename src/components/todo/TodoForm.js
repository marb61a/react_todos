import React from 'react';

export const TodoForm = (props) => (
    <form>
        <input type="text" 
        onChange={props.handleInputChange} 
        value={props.currentTodo}/>
    </form>);
    
    // React.PropTypes is deprecated since React 15.5.0 -  npm module prop-types
    TodoForm.propTypes = {
        currentTodo: React.PropTypes.string.isRequired,
        handleInputChange: React.PropTypes.func.isRequired
        
    };