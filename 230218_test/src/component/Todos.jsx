import { TodoProvider } from "../context/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import styled from "styled-components";

function Todos() {
  return (
    <div>
      <TodoProvider>
        <TodoCreate />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

const Border = styled.div`
  width: 400px;
  height: 900px;
`;

export default Todos;
