import { useState } from "react"
import DayCard from "./DayCards"
import Tasks from "./Tasks"
import './styles.css'

type Task = {
  id: number
  title: string
  state: boolean
}

type TasksByDay = {
  [date: string]: Task[]
}

export default function Planner() {
  const [selectedDay, setSelectedDay] = useState<string>(new Date().toDateString())
  const [tasksByDay, setTasksByDay] = useState<TasksByDay>({})

  const handleAddTask = (task: Task) => {
    setTasksByDay(prev => ({
      ...prev,
      [selectedDay]: [task, ...(prev[selectedDay] || [])]
    }))
  }

  const handleUpdateTasks = (updatedTasks: Task[]) => {
    setTasksByDay(prev => ({
      ...prev,
      [selectedDay]: updatedTasks
    }))
  }
  
  return (
    <div className="bento-grid">
      <DayCard selectedDay={selectedDay} onSelectedDay={setSelectedDay} className="bento-day" />
      <Tasks
      tasks={tasksByDay[selectedDay] || []}
      onAddTask={handleAddTask}
      onUpdateTasks={handleUpdateTasks}
      className="bento-task"></Tasks>
      
    </div>
  )
}
