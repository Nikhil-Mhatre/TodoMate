import { useState, useDispatch, addNewTodo, storeLocally } from "./index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addNewTodo({ text: todo }));
    dispatch(storeLocally());
    setTodo("");
  };
  const inputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex">
      <input
        value={todo}
        onChange={inputChangeHandler}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
