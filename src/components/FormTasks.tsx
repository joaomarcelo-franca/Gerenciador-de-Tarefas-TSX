import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface FormTasksProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

function FormTasks({ onAddTaskSubmit }: FormTasksProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="bg-slate-200 rounded-md shadpw space-y-4 p-6 flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descricao da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onAddTaskSubmit={onAddTaskSubmit}
      />
    </div>
  );
}
export default FormTasks;
