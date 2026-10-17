export interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface ApiTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
