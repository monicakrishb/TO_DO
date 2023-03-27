import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export const CreateTask = ({ modal, toggle }) => {
  const [taskname, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [duedate, setDuedate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let objtask = {
      taskname: taskname,
      description: description,
      priority: priority,
      duedate: duedate,
      status:"pending"
    };
    console.log(objtask);
    axios.post("http://localhost:8000/task", objtask);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskname}
              onChange={(e) => setTaskName(e.target.value)}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}  
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select
              className="form-control"
              name="taskName"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>set task priority</option>

              <option value="high">High</option>

              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duedate</label>
            <input
              type="date"
              className="form-control"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
              name="taskName"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit} color="primary">
          create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
