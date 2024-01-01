import { useState } from "react";
// import "../App.css";
import Header from "../Components/Header";

const App = () => {
  let [task, setTask] = useState("");
  let [todos, setTodos] = useState([]);

  function handleTodos() {
    setTodos([...todos, task]);
    setTask("");
  }

  // useEffect(() => {
  //   conectDB();
  // }, []);

  function handleClicked(e) {
    if (e.keyCode === 13 && task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  }

  return (
    <>
      <Header />
      <div className="flex gap-8 flex-col items-center justify-center w-screen">
        <h1 className="font-bold">Todo App 🦈</h1>
        <div className="flex gap-4">
          <label htmlFor="task">Enter Task Here 👉🏻 : </label>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            id="task"
            className=" text-sm px-2 rounded-md"
            onKeyDown={(e) => {
              handleClicked(e);
            }}
          />
        </div>
        {task !== "" ? (
          <button
            onClick={() => {
              handleTodos();
            }}
            className="w-28 text-sm"
          >
            Submit 🚀
          </button>
        ) : null}
        <div className="h-[3px] text-zinc-400 w-screen" />
        <div className="flex">
          <ul id="Todos" className="flex flex-col gap-3">
            {todos.map((e, index) => {
              return (
                <li className="w-fit flex justify-between gap-4" key={index}>
                  <span className="w-[20%] text-left">{`${index + 1}.`}</span>
                  <span className="w-[80%] text-left">{e}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
