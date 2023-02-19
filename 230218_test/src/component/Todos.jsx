import { TodoProvider } from "../context/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import styled from "styled-components";

function Todos() {
  return (
    <div>
      <TodoProvider>
        <Border>
          <h3>2023년 2월 19일</h3>
          <TodoCreate />
          <TodoList />
        </Border>
      </TodoProvider>
    </div>
  );
}

const Border = styled.div`
  position: absolute;
  width: 400px;
  padding: 5px 10px;
  border: 2px solid;
  height: auto px;
  box-sizing: border-box;
  margin-left: 300px;
`;

export default Todos;
