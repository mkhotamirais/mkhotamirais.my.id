import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: "item " + (i + 1),
    });
  }
  return initialTodos;
}

const TodoList2 = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([{ id: todos.length, text: text }, ...todos]);
        }}
      >
        add
      </button>
      {todos.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
};

export default TodoList2;
