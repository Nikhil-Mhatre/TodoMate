import {
  useState,
  useDispatch,
  storeLocally,
  updateTodo,
  removeTodo,
  toggleComplete,
} from "./index";

import { Draggable } from "react-beautiful-dnd";

function TodoItem({ todo, index }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({ id: todo.id, text: todoMsg }));
    setIsTodoEditable((prev) => !prev);
    dispatch(storeLocally());
  };

  const toggleCompleted = () => {
    dispatch(toggleComplete({ id: todo.id }));
  };

  const deleteTodo = () => {
    dispatch(removeTodo({ id: todo.id }));
    dispatch(storeLocally());
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
              isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default TodoItem;
