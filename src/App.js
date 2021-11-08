import "./App.css";
import Header from "./Header";
import Todolist from "./Todolist";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrashAlt);

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleTask = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const newTask = { text: task, checked: false };
    setTask(newTask);
    const newList = [...list];
    newList.push(newTask);
    setList(newList);
  };

  const handleChecked = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  const sortList = list.sort((a, b) => {
    return a.checked - b.checked;
  });

  return (
    <div>
      <div className="container">
        <Header />
        <Todolist
          task={task}
          list={list}
          addTask={addTask}
          setList={setList}
          handleTask={handleTask}
          handleChecked={handleChecked}
          sortList={sortList}
        />
      </div>
    </div>
  );
}

export default App;
