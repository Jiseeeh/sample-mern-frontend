import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Task from "../interfaces/ITask";
import { useTasks } from "./lib/TaskContext";

const Card: React.FC<Task> = (props) => {
  const taskId = props.id;
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [, setTasks] = useTasks();

  const handleUpdate = () => {
    const data = { title, body };

    setTasks((prevTaskVal) => {
      prevTaskVal.forEach((task) => {
        if (task.id === taskId) {
          task.title = data.title;
          task.body = data.body;
        }
      });
      return prevTaskVal;
    });

    const response = axios.patch(
      `${import.meta.env.VITE_API_URL}/todos/${taskId}`,
      data
    );

    toast.promise(response, {
      loading: "Updating your task in the cloud",
      error: "Something went wrong!",
      success: "Update success!",
    });
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/todos/${taskId}`
    );

    console.log(response.data);
  };

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <input
          type="text"
          placeholder={title}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="input font-bold w-full max-w-xs focus:outline-0"
        />
        <textarea
          className="textarea"
          placeholder={body}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-error" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
