import Form from "./components/Form";
import Header from "./components/Header";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        todoItem={todoItem}
        setTodoItem={setTodoItem}
      ></Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
