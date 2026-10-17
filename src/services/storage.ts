import type { Task } from "../types";
export function loadTasks(): Task[] {
  try {
    const salvo = localStorage.getItem("tasks");

    if (salvo == null) {
      return [];
    }

    return JSON.parse(salvo);
  } catch {
    return [];
  }
}

export function getById(id: string | null): Task | undefined {
  if (id == null) {
    return undefined;
  }
  const lista = loadTasks();
  return lista.find((task) => task.id == id);
}
