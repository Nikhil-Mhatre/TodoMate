import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { storeLocally, updateTodoList } from "./components";
import { useState } from "./components";
import { useEffect } from "react";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const [isMount, setIsMount] = useState(true);
  const dispatch = useDispatch();
  let newTodo = [...todos];

  const dragEndHandler = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    [newTodo[source.index], newTodo[destination.index]] = [
      newTodo[destination.index],
      newTodo[source.index],
    ];
    setIsMount(false);
    setTimeout(() => {
      dispatch(updateTodoList({ newTodoList: newTodo }));
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMount(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isMount]);

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <Droppable droppableId="wdfd">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`flex flex-wrap gap-y-3 transition-all ease-in-out duration-3p[00
                ${!isMount && "opacity-0"}`}
              >
                {todos.map((currentTodo, index) => (
                  <TodoItem
                    key={currentTodo.id}
                    todo={currentTodo}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
