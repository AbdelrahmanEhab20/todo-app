import React from "react";
import styles from "../style/style.module.css";
import shortid from "shortid";
const Form = ({ todoList, setTodoList, todoItem, setTodoItem }) => {
  const handleChange = (event) => {
    if (event.target.name === "todo") {
      setTodoItem(event.target.value);
    }
  };
  //################################
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // let tempList = todoList;
    // tempList.push(todoItem);
    // setTodoList(tempList);
    setTodoList([...todoList, { name: todoItem, id: shortid.generate() }]);
    setTodoItem("");
    console.log("todoList");
    console.log(todoList);
  };
  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Todo Text"
          name="todo"
          className={styles.todoInput}
          value={todoItem}
        ></input>

        <button className={styles.todoButton} type="submit">
          Submit Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
