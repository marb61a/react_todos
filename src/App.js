import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build An Awesome App', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false}
      ]      
    };
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
        </div>
        <div className="Todo-List">
          <ul>
            {this.state.todos.map(todo => 
              // Need a key property when using an array or iterator
              <li key={todo.id}> 
                <input type="checkbox" checked={todo.isComplete}/>
                  {todo.name}
              </li> 
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
