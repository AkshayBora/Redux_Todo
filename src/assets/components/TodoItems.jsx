import React from "react";
import { useDispatch } from "react-redux";
import { clearTodo, doneTodo, removeTodo } from "../Slices/todoSlice";

const TodoItems = ({ allTodos, setInput, setToggleEdit, setEditIndex }) => {
  const dispatch = useDispatch();

  const updateTodoHandler = (id, text) => {
    setToggleEdit(false);
    setInput(text);
    setEditIndex(id);
  };

  const doneTodoHandler = (id, check) => {
    dispatch(doneTodo({ id, check }));
  };

  return (
    <>
      <div className="showItems">
        {allTodos.map((todos) => (
          <div className="eachItem" key={todos.id}>
            {todos.check ? (
              <h3
                className="checked"
                onClick={() => doneTodoHandler(todos.id, todos.check)}
              >
                {todos.text}
              </h3>
            ) : (
              <h3 onClick={() => doneTodoHandler(todos.id, todos.check)}>
                {todos.text}
              </h3>
            )}

            <div className="todo-btn">
              <i
                className="far fa-edit add-btn"
                title="Edit_Item"
                onClick={() => updateTodoHandler(todos.id, todos.text)}
              ></i>
              <i
                className="far fa-trash-alt add-btn"
                title="Delete_Items"
                onClick={() => dispatch(removeTodo(todos.id))}
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="showItems">
        <button
          className="btn effect04"
          data-sm-link-text="Remove All"
          onClick={() => dispatch(clearTodo())}
        >
          <span>Check List</span>
        </button>
      </div>
    </>
  );
};

export default TodoItems;
