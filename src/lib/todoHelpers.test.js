import {addTodo} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
   const startTodos =[
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false}
    ]; 
    
    const newTodo = {
        id:3, name:'three', isComplete: false
    };
    
    const expected = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name:'three', isComplete: false}
    ];
    
    const result = addTodo(startTodos, newTodo);
    
    expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
   const startTodos =[
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false}
    ]; 
    
    const newTodo = {
        id:3, name:'three', isComplete: false
    };
    
    const expected = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name:'three', isComplete: false}
    ];
    
    const result = addTodo(startTodos, newTodo);
    
    expect(result).not.toBe(startTodos);
});

//   In the Jest testing framework you are able to skip tests
//   Add .skip after the test keyword in the helpersSpec file 

test('findById should return the expected item from an array', () => {
    const startTodos =[
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
    ]; 
    
    const expected = {id: 2, name: 'two', isComplete: false};
    const result = findById(2, startTodos);
    expect(result).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
    
});

test('toggleTodo should not mutate the original todo', () => {
    
});

test('updateTodo should update an item by id', () => {
    
});

test('updateTodo should not mutate the original array', () => {
    
});