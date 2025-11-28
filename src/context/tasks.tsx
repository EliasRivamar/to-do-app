import { createContext, useContext, useState } from "react";
import { type TasksContextType, type Task } from '../types/types'

export const TasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTasks = (day: string, newTasks: Task[]) => {
    setTasks((prev) => [
      ...prev.filter((t) => t.day !== day),
      ...newTasks,
    ]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
