import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const addNew = {
        id: nanoid(),
        text: action.payload,
        check: false,
      };
      state.todoItems.push(addNew);
    },
    removeTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
    clearTodo: (state, action) => {
      state.todoItems = [];
    },
    updateTodo: (state, action) => {
      const { editIndex, input } = action.payload;
      // console.log(editIndex, input);
      const todo = state.todoItems.find((todo) => todo.id === editIndex);
      if (todo) {
        todo.text = input;
      }
    },
    doneTodo: (state, action) => {
      const { id, check } = action.payload;
      const todo = state.todoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.check = !check;
      }
    },
  },
});

export const { addTodo, removeTodo, clearTodo, updateTodo, doneTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
