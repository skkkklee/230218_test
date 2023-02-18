import React, { useMemo, useReducer } from "react";
import { useTodoDispatch, useTodoState } from "../context/todos";

function countUndoneTodo(todos) {
  console.log("안한 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

function TodoList() {
  const todos = useTodoState();
  const undoneCount = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);

  return (
    <div>
      해야할일 : {undoneCount}
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();
  const handleToggle = () => {
    dispatch({ type: "toggle", id: todo.id });
  };
  const handleRemove = () => {
    dispatch({ type: "remove", id: todo.id });
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default React.memo(TodoList);


