import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// * CRUD implementations in slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    // updateTodo: (state, action) => {
    //   const { id, text } = action.payload;
    //   const currTodo = state.find(todo => todo.id === id);
    //   if (currTodo) {
    //     currTodo.text = text;
    //   }
    // },

    // removeTodo: (state, action) => {
    //   return state.find(todo => todo.id === action.payload);
    // },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  }
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
