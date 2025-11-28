import { useTasks } from "../hooks/useTask";
import { ProgressCircle } from "./Progress";

export function Stadistics () {
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.state).length;
  const pending = tasks.filter(t => !t.state).length;
  const progress = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;
  
  return (
    <div className="rounded-xl bg-white dark:bg-background-dark/50 p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
    <h3 className="text-lg font-bold text-[#111813] dark:text-white mb-4">Weekly Summary</h3>
    <div className="flex items-center justify-center gap-4 my-auto">
      <div className="relative size-36">
        <ProgressCircle progress={progress} />
      </div>
    </div>
    <div className="mt-auto space-y-3 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary"></span>
          <span className="text-sm font-medium text-[#111813] dark:text-gray-200">Completed</span>
        </div>
        <span className="text-sm font-bold text-[#111813] dark:text-white">{completed}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span className="text-sm font-medium text-[#111813] dark:text-gray-200">Pending</span>
        </div>
        <span className="text-sm font-bold text-[#111813] dark:text-white">{pending}</span>
      </div>
    </div>
  </div>
  )
}