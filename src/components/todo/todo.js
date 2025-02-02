import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './todoSlice'; 

const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, text: '' });

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = { id: todos.length , text: newTodoText };
      dispatch(addTodo(newTodo));
      setNewTodoText('');
    }
  };

  const handleSaveTodo = () => {
    dispatch(updateTodo(editTodo));
    setEditTodo({ id: null, text: '' });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editTodo.id === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTodo.text}
                  onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
                />
                <button onClick={handleSaveTodo}>Save</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => setEditTodo(todo)}>Edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
