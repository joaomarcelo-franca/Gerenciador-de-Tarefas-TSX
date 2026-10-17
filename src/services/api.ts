import type { Task, ApiTask } from "../types";

// Funcao que transforma as tasks da api em tasks do sistema
function toTask(apiTask: ApiTask): Task {
  return {
    id: apiTask.id.toString(),
    title: apiTask.title,
    isCompleted: apiTask.completed,
    description: "API NAO TROUXE DESCRICAO",
  };
}

// Funcao que o App vai usar para pegar
export async function getTasks(): Promise<Task[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      method: "GET",
    },
  );

  const data: ApiTask[] = await response.json();

  console.log(data);

  const tasks = data.map(toTask);

  return tasks;
}
