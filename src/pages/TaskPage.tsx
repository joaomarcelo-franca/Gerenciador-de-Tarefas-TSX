import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import { getById } from "../services/storage";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const task = getById(id);
  if (!task) {
    return;
  }

  function returnToHomePage() {
    navigate("/");
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125 flex flex-col gap-5">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => returnToHomePage()}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title title="Detalhes da Tarefa"></Title>
        </div>
        <div className="bg-slate-200 p-8 rounded-md flex flex-col gap-5">
          <h2 className="text-xl text-slate-600 font-bold ">{task.title}</h2>
          <p className="text-slate-600">{task.description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
