export type Task = {
  id: number;
  title: string;
  state: boolean;
  day: string; // yyyy-mm-dd
};

export type TasksContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTasks: (day: string, newTasks: Task[]) => void;
};

export type TasksProps = {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onUpdateTasks: (tasks: Task[]) => void;
};

export type ProgressCircleProps = {
  progress: number; // 0 a 100
};
