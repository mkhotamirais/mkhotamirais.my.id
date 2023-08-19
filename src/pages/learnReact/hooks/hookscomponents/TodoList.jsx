import { useState } from "react";
const initialTodos = [
  { id: 0, title: "ahmad", done: true },
  { id: 1, title: "abdul", done: false },
  { id: 2, title: "siti", done: false },
];
let nextId = 3;
const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");
  const handleAdd = (title) => {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleEdit = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border"
      />
      <button
        onClick={() => {
          setTitle("");
          handleAdd(title);
        }}
        className="border"
      >
        Add
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <EditComponent todo={todo.title} onChange={handleEdit} />
          <button
            onClick={() => handleDelete(todo.id)}
            className="border p-2 ml-3"
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};

const EditComponent = ({ todo, onChange }) => {
  const [isEdit, setIsEdit] = useState();
  if (isEdit) {
    return (
      <>
        <input
          value={todo}
          onChange={(e) => onChange({ ...todo.title, todo: e.target.value })}
          className="border"
        />
        <button
          onClick={() => {
            setIsEdit(false);
          }}
          className="border p-2 ml-3"
        >
          save
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>{todo}</p>
        <button onClick={() => setIsEdit(true)} className="border p-2 ml-3">
          edit
        </button>
      </>
    );
  }
};
EditComponent.propTypes;

export default TodoList;
