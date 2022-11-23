import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((item) => (
        <Todo
          key={item.id}
          todoItem={item}
          todoList={todoList}
          setTodoList={setTodoList}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
