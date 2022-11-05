import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useTasks } from "./lib/TaskContext";

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [, setTasks] = useTasks();

  const createTask = async () => {
    // title & body must have a value
    if (!title || !body) {
      toast.error("Please input properly!");
      return;
    }

    const toastId = toast.loading("Creating task in the cloud");

    const data = {
      title,
      body,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/todos`,
        data
      );

      if (response.status === 200) {
        toast.dismiss(toastId);
        toast.success("Create success!");

        const id = response.data.todo.id;
        setTasks((prevTaskVal) => [...prevTaskVal, { ...data, id }]);

        // clear fields
        setTitle("");
        setBody("");
      } else throw new Error("Something went wrong!");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <section className="mb-4 form-control">
      <label className="label">
        <span className="label-text">Task title</span>
      </label>
      <label className="input-group">
        <span>Title</span>
        <input
          type="text"
          placeholder="School"
          className="input input-bordered"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label className="label">
        <span className="label-text">Task body</span>
      </label>
      <label className="input-group">
        <span>Body</span>
        <input
          type="text"
          placeholder="Calculus homework"
          className="input input-bordered"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </label>
      <button className="m-5 btn btn-ghost" onClick={createTask}>
        Create
      </button>
    </section>
  );
};

export default Form;
