import React from "react";
import "../styles/card.css";
const Cards = ({ taskObj }) => {
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
        style={{ backgroundColor: colors.primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: "10px",
          }}
        >
         <p>{taskObj.taskname}</p> 
        </span>
        <div id="taskObj">
        <p className="mt-3">{taskObj.description}</p>
        <p className="mt-3">{taskObj.priority}</p>
        <p className="mt-3">{taskObj.status}</p>
        <p className="mt-3">{taskObj.duedate}</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
