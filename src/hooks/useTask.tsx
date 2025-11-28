import { useContext } from "react";
import { TasksContext } from "../context/tasks";

export function useTasks() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks debe usarse dentro de <TasksProvider>");
  return ctx;
}
