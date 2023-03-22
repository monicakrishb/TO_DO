import React, { useState } from "react";
import "../styles/TodoList.css";
import { CreateTask } from "../modals/CreateTask";

export const TodoList = () => {
    const[modal,setModal]=useState(false);
    const[taskList,setTaskList]=useState([]);
    const toggle=()=>{
        setModal(modal);
    }
    const saveTask=(taskObj)=>{
        let tempList=taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
    }
  return (
    <>

      <div className="header text-center">
        <h3 id="color">Todo List</h3>
        <button className="btn btn-primary mt-2" id="create" onClick={()=>setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">

      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
  );
};
