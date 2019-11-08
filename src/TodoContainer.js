import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, toggleTodo, setVisibilityFilter } from "./redux";

function TodoContainer() {
  const todos = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todos</h1>
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id => dispatch(toggleTodo(id))}
      />
      <AddTodo onAddClick={text => dispatch(addTodo(text))} />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter => dispatch(setVisibilityFilter(filter))}
      />
    </div>
  );
}

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul className="todo-list">
      {todos.map(({ completed, id, text }) => (
        <li
          key={id}
          className={completed ? "todo todo--completed" : "todo"}
          onClick={() => onTodoClick(id)}
        >
          <span className="todo__content">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoContainer;

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <div className="add-todo">
      <form
        onSubmit={e => {
          e.preventDefault();
          input.value && onAddClick(input.value);
          input.value = "";
        }}
      >
        <input
          autoFocus
          className="add-todo__input"
          ref={node => {
            input = node;
          }}
        />
        <button
          className="add-todo__btn"
          onClick={() => {
            input.value && onAddClick(input.value);
            input.value = "";
          }}
        >
          <i className="fa fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  return (
    <button
      className="filter__link"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
      style={{ opacity: currentFilter === filter ? 0.2 : 1 }}
    >
      {children}
    </button>
  );
};

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <div className="filters">
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-list-ul"></i>
    </FilterLink>
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-times"></i>
    </FilterLink>
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-check"></i>
    </FilterLink>
  </div>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};
