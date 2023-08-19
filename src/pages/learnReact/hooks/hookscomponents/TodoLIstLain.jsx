import { useState } from "react";

const TodoLIstLain = () => {
  const [version, setVersion] = useState(0);
  return (
    <>
      <button onClick={() => setVersion(version + 1)}>reset</button>
      <Versi key={version} />
    </>
  );
};

const Versi = () => {
  const [name, setName] = useState("ahmad");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </>
  );
};

export default TodoLIstLain;
