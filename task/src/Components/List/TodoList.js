import React, { useState, useEffect } from "react";
import "../styles/TodoList.css";
import { CreateTask } from "../modals/CreateTask";
import axios from "axios";
import Cards from "./Cards";


const TodoList = () => {
  const [modal, setModal] = useState(false);

  const [arraydata, setArraydata] = useState([]);

  const toggle = () => {
    setModal(modal);
  };
  useEffect(() => {
    Data();
  }, []);

  const Data = async () => {
    const response = await axios.get("http://localhost:8000/task");
    console.log(response);
    setArraydata(response.data);
  };

  return (
    <>
      <div className="header text-center">
        <h3 id="color">Todo List</h3>
        <button
          className="btn btn-primary mt-2"
          id="create"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
    <h1 className="title">Priority task</h1>
      <div className="task-container">
        {arraydata &&
          arraydata.map((e) => <Cards taskObj={e} />)}
      </div>
      <div className="task-container">
        {arraydata &&
          arraydata.map((e) => <Cards taskObj={ e.priority=="high"} />)}
      </div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
};
export default TodoList;
