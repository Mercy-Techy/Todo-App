import { useState } from "react";
import Form from "./Form";

const EditTodo = ({ todo, editTodoHandler, cancelClickHandler }) => {
  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);
  const submitHandler = (event) => {
    event.preventDefault();
    const editedTodo = { ...todo, title, text };
    editTodoHandler(editedTodo);
    cancelClickHandler();
  };
  const titleHandler = (event) => setTitle(event.target.value);
  const textHandler = (event) => setText(event.target.value);
  return (
    <Form
      submitHandler={submitHandler}
      titleHandler={titleHandler}
      title={title}
      text={text}
      textHandler={textHandler}
      cancelClickHandler={cancelClickHandler}
      buttonText="Edit Todo"
    />
  );
};

export default EditTodo;
