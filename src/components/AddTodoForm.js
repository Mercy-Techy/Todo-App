import { useState } from "react";
import Form from "./Form";

const AddTodoForm = ({ addTodoHandler, cancelClickHandler }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      text,
      date: new Date(),
    };
    addTodoHandler(todo);
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
      buttonText="Add Todo"
    />
  );
};

export default AddTodoForm;
