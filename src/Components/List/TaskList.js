import React ,{useState,useEffect}from "react";
import Cards from "./Cards";
import axios from "axios";


const TaskList = () => {
  const [arraydata, setArraydata] = useState([]);
  useEffect(() => {
    Data();
  }, []);

  const Data = async () => {
    const response = await axios.get("http://localhost:8000/task");
    console.log(response.data);
    setArraydata(response.data);
  };
  return (
    <div>
      <div className="task-container">
        {arraydata &&
          arraydata.map((e, index) => (
            <Cards
              taskObj={e}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
export default TaskList;
