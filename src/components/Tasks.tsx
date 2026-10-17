import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import type { Task } from "../types";
import ButtonTask from "./ButtonTask";
import { useNavigate } from "react-router-dom";
interface TasksProps {
  tasks: Task[];
  onTaskClick: (id: string) => void;
  onTaskClickRemove: (id: string) => void;
}

function Tasks({ tasks, onTaskClick, onTaskClickRemove }: TasksProps) {
  const navigate = useNavigate();

  function onSeeDetailsClick(id: string) {
    const query = new URLSearchParams();
    query.set("id", id);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>

          <ButtonTask onClickFunction={() => onSeeDetailsClick(task.id)}>
            <ChevronRightIcon />
          </ButtonTask>
          <ButtonTask onClickFunction={() => onTaskClickRemove(task.id)}>
            <Trash2Icon />
          </ButtonTask>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
