import React, { useState, useEffect } from "react";
import "../styles/TodoList.css";
import { CreateTask } from "../modals/CreateTask";
import axios from "axios";
import Cards from "./Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [arraydata, setArraydata] = useState([]);
  const [priority, setPriority] = useState("");
  const highPriorityTasks = arraydata.filter((a) => {
    return a.priority == "high";
  });
  const toggle = () => {
    setModal(!modal);
  };
  useEffect(() => {
    Data();
  }, []);
  const deleteTask=()=>{

  }

  const Data = async () => {
    const response = await axios.get("http://localhost:8000/task");
    // console.log(response.data);
    setArraydata(response.data);
    // console.log("arraydata",arraydata);
    console.log(highPriorityTasks);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        {/* <h3 id="color">Todo List</h3> */}
        <button
          className="btn btn-primary mt-2"
          id="create"
          onClick={() => setModal(true)}
        >
          Add a task
        </button>
      </div>

      <h3 style={{ color: "black" }}>Tasks In Priorities</h3>
      <div className="task-container">
        {highPriorityTasks.map((e, index) => (
          <Cards taskObj={e} index={index} />
        ))}
      </div>
      <h3 style={{ color: "black" }}>Categorize Your Tasks Here!</h3>
      <select
        className="form-control category"
        id="category"
        name="taskName"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>set task priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <div className="task-container">
        {arraydata &&
          arraydata
            .filter((e) => e.priority == priority)
            .map((e) => <Cards taskObj={e} />)}
      </div>

      <div className="task-container">
        {arraydata &&
          arraydata.map((e, index) => <Cards taskObj={e} index={index} deleteTask={deleteTask}/>)}
      </div>

      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
};
export default TodoList;
