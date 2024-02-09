import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Slices/todoSlice";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [input, setInput] = useState("");
  const [toggleEdit, setToggleEdit] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todo.todoItems);

  const addTodoHandler = () => {
    if (!input) {
      alert("Please fill some data!...");
    } else if (input && !toggleEdit) {
      dispatch(updateTodo({ editIndex, input }));
      // console.log(editIndex);
      // console.log(input);
      setEditIndex(null);
      setToggleEdit(true);
    } else {
      dispatch(addTodo(input));
      setToggleEdit(true);
    }

    setInput("");
  };

  // const updateTodoHandler = (id, text) => {
  //   setToggleEdit(false);
  //   setInput(text);
  //   setEditIndex(id);
  // };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>My Todolist 📋</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Write Here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {toggleEdit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Items"
                onClick={() => addTodoHandler()}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update Items"
                onClick={() => addTodoHandler()}
              ></i>
            )}
          </div>

          <TodoItems
            allTodos={allTodos}
            setInput={setInput}
            setToggleEdit={setToggleEdit}
            setEditIndex={setEditIndex}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
