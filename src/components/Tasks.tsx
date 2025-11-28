import { useState, type FormEvent } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import {type Task, type TasksProps } from '../types/types'



export default function Tasks({ tasks, onAddTask, onUpdateTasks }: TasksProps) {
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;

    const newTask = { id: Date.now(), title: text, state: false, day: '' };
    onAddTask(newTask);
    setText("");
  };

  const toggleTask = (task: Task) => {
    onUpdateTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, state: !t.state } : t
      )
    );
  };

  const deleteTask = (task: Task) => {
    onUpdateTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="flex flex-col gap-y-4 h-[350px] overflow-y-auto">

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex gap-2 sticky top-0 z-50 bg-white">
        <input
          type="text"
          className="flex-1 rounded-lg p-2 border"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="px-4 py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg cursor-pointer active:scale-90 duration-350 transition-all">
          Add
        </button>
      </form>

      {/* Lista */}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="group relative flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          <label className="flex items-center gap-x-4">
            <input
              type="checkbox"
              checked={task.state}
              onChange={() => toggleTask(task)}
              className="h-5 w-5 rounded border-2 cursor-pointer"
            />
            <p className={`${task.state ? "line-through opacity-60" : ""}`}>
              {task.title}
            </p>
          </label>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => deleteTask(task)}
              className="p-1.5 text-gray-500 hover:text-black cursor-pointer hover:scale-110 active:scale-90 duration-350 transition-all"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
