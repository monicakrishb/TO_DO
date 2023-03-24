import React, { useEffect } from "react";
import "../styles/card.css";
import service from "../../services/API";
import axios from "axios";

let taskcolour = "";
const Cards = ({ taskObj, index }) => {
//   const data=async()=>{
//     const  response= await axios.get(`http://localhost:8000/task`);
//     const data=response.data
//     return data
// }
  useEffect (() => {
    
    const  response=  axios.get(`http://localhost:8000/task`);
    const data=response.data

   console.log('data',data);
    const colour = () => {
      console.log("colour");
      let priority = taskObj.priority;
      console.log(priority);
      if ( priority == "high") {
        taskcolour = "red";
      } else if (priority == "medium") {
        taskcolour = "orange";
      } else {
        taskcolour = "orange";
      }
    };
    colour();
    console.log("iy");
  }, []);

  // let taskcolour="";
  //  const colour=()=>{
  //   console.log('colour');
  //   let priority=taskObj.priority
  //   console.log(priority);
  //   if(priority=='high'){
  //     taskcolour="red"
  //  }
  //  else{
  //    taskcolour="l"
  //  }

  console.log(taskcolour);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ backgroundColor: taskcolour[index % 5] }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            backgroundColor: taskcolour[index % 5],
            borderRadius: "10px",
          }}
        >
          <p>{taskObj.taskname}</p>
        </span>
        <div id="taskObj">
          <p className="mt-3" style={{ backgroundColor: taskcolour }}>
            {taskObj.description}
          </p>
          <p className="mt-3">{taskObj.priority}</p>
          <p className="mt-3">{taskObj.status}</p>
          <p className="mt-3">{taskObj.duedate}</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
