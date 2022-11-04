import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import Navbar from "./Navbar";
import Form from "./Form";
import Card from "./Card";
import Task from "../interfaces/ITask";
import { useTasks } from "./lib/TaskContext";

function App() {
  const [tasks, setTasks] = useTasks();
  const [mappedTasks, setMappedTasks] = useState<JSX.Element[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("fetching ran");
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/todos`
        );
        if (response.status === 200) {
          setTasks(response.data.todos);
          setIsLoading(false);
        } else throw new Error("Something went wrong!");
      } catch (error) {
        toast.error(`${error}`);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log("mapping ran");
    const mapTasks = () => {
      const mapped = tasks?.map((task) => (
        <Card key={task.id} title={task.title} body={task.body} id={task.id} />
      ));

      setMappedTasks(mapped);
    };

    mapTasks();
  }, [tasks]);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Form />
      {isLoading ? <progress className="progress w-56"></progress> : null}
      <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {mappedTasks}
      </section>
    </main>
  );
}

export default App;
