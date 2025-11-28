import { createContext, useEffect, useRef, useState } from "react";
import { type TasksContextType, type Task } from '../types/types'

export const TasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log('tasks', tasks)
  const mountedRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    console.log(saved)
    if (saved) {
      
        setTasks(JSON.parse(saved));
      
    }
  }, []);

  useEffect(() => {
    // evitar guardar en el primer render (antes de que la carga termine)
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
