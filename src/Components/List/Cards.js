import React, { useState } from "react";
import "../styles/card.css";
import axios from "axios";

const Cards = ({ taskObj, index,deleteTask}) => {
  const [modal, setModal] = useState(false);
  const [taskcolour, setTaskColour] = useState("");
  const [status, setStatus] = useState("");

  const colorChanger = (status) => {
    if (status == "completed") {
      setTaskColour("green");
      console.log(taskcolour);
    } else if (status == "inprogress") {
      setTaskColour("orange");
    } else {
      setTaskColour("grey");
    }
    console.log(taskcolour);
  };
  // useEffect(() => {
  //   const response = axios.get(`http://localhost:8000/task`);
  //   const data = response.data;

  //   console.log("data", data);
  //   const colour = () => {
  //     console.log("colour");
  //     let priority = taskObj.priority;
  //     console.log(priority);
  //     if (priority == "high") {
  //       taskcolour = "red";
  //     } else if (priority == "medium") {
  //       taskcolour = "orange";
  //     } else {
  //       taskcolour = "orange";
  //     }
  //   };
  //   colour();
  //   console.log("iy");
  // }, []);
  const handleDelete = () => {
    deleteTask()
  };
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div class="card-wrapper mr-5">
      <div class="card-top" style={{ backgroundColor: taskcolour }}></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            backgroundColor: taskcolour[index % 5],
            borderRadius: "10px",
          }}
        >
          <p style={{ backgroundColor: taskcolour }}>{taskObj.taskname}</p>
          
        </span>
        <div id="taskObj">
          <p className="mt-3">{taskObj.description}</p>
          <p className="mt-3">{taskObj.priority}</p>
          <select
            id="select"
            className="form-control"
            name="taskName"
            onChange={(e) => colorChanger(e.target.value)}
          >
            <option>set status</option>

            <option value="completed">Completed</option>

            <option value="inprogress">Inprogress</option>
            <option value="cancelled">cancelled</option>
          </select>

          <p className="mt-3">{taskObj.duedate}</p>
          <div id="icon">
         
            <span class="material-symbols-outlined" style={{color:"blue","cursor":"pointer"} } onClick={handleDelete}>
              edit
            </span>
            <span
              class="material-symbols-outlined" style={{color:"blue","cursor":"pointer"}}
              onClick={() => setModal(true)}
            >
              delete
            </span>
            </div>
          <div>
           

          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
