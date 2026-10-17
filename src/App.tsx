import { useState } from "react";
import FormTasks from "./components/FormTasks";
import Title from "./components/Title";
import { v4 } from "uuid";
import type { Task } from "./types";
import Tasks from "./components/Tasks";
import { useEffect } from "react";
import { getTasks } from "./services/api";
import { loadTasks } from "./services/storage";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      const TasksDaApi: Task[] = await getTasks();

      // setTasks((atuais) => {
      //   if (tasks.length == 0) {
      //     return TasksDaApi;
      //   } else {
      //     return atuais;
      //   }
      // });
      setTasks((atuais) => (atuais.length == 0 ? TasksDaApi : atuais));
    }
    fetchTasks();
  }, []);

  function onAddTaskSubmit(title: string, description: string) {
    const newTask: Task = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function onTaskClick(id: string) {
    console.log("Entrou na funcao");
    const newTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
    console.log("Setou");
  }

  function onTaskClickRemove(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="bg-slate-500 w-screen h-screen flex justify-center p-6">
        <div className="w-125  flex flex-col gap-5">
          <Title title="Gerenciador de Tarefas" />
          <FormTasks onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onTaskClickRemove={onTaskClickRemove}
          />
        </div>
      </div>
    </>
  );
}

export default App;
