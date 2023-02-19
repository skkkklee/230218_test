import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../context/todos";

function TodoCreate() {
  const [text, setText] = useState("");
  const nextId = useRef(4);
  console.log("render..");
  const dispatch = useTodoDispatch();

  const handleText = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "create", id: nextId.current++, text });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "360px" }}
          type="text"
          onChange={handleText}
          value={text}
        />
        <br />
        <br />
        <Button style={{ width: "50px" }}>등록</Button>
      </form>
    </div>
  );
}

const Button = styled.button`
  background: pink;
  color: white;
  border-radius: 30px;
  border: none;
  padding: 3px 7px;
  margin-left: 130px;
`;

export default React.memo(TodoCreate);
