import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }
  function todoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }
  function statusHandler(i) {
    setStatus(i.target.value);
  }
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <form action="">
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="form-input"
        />
        <button onClick={todoHandler} className="form-button">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
