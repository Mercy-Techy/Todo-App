import Button from "./Button";

const Form = ({
  submitHandler,
  titleHandler,
  title,
  text,
  textHandler,
  cancelClickHandler,
  buttonText,
}) => {
  return (
    <form
      onSubmit={submitHandler}
      className="w-50 card shadow-sm rounded p-3 bg-light border-0 pb-4"
    >
      <label>Title</label>
      <input
        value={title}
        className="w-75 rounded border-0 p-2 shadow-sm input mb-3"
        onChange={titleHandler}
      />
      <label>Text</label>
      <textarea
        value={text}
        onChange={textHandler}
        rows="5"
        className="w-75 rounded border-0 p-2 shadow-sm input"
      ></textarea>
      <div className="mt-3">
        <Button
          otherClassName="mx-2"
          text="Cancel"
          clickHandler={cancelClickHandler}
        />
        <Button text={buttonText} buttontype="submit" />
      </div>
    </form>
  );
};

export default Form;
