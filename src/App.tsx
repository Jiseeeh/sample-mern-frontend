import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import Navbar from "./Navbar";
import Form from "./Form";
import Card from "./Card";
import { useTasks } from "./lib/TaskContext";

function App() {
  const [tasks, setTasks] = useTasks();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/todos`);
      if (response.status === 200) {
        setTasks(response.data.todos);
        setIsLoading(false);
      } else throw new Error("Something went wrong!");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Form />
      {isLoading ? <progress className="progress w-56"></progress> : null}
      <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {tasks?.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            body={task.body}
            id={task.id}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
