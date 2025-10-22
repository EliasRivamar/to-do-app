import { useState, type FormEvent } from "react"
import'./styles.css'

type Task = {
    id: number
    title: string
    state: boolean
  }

type TasksProps = {
    tasks: Task[];
    onAddTask: (task: Task) => void;
    onUpdateTasks: (tasks: Task[]) => void;
    className?: string;
}

export default function Tasks({className, tasks, onAddTask, onUpdateTasks}: TasksProps) {
    const [text, setText] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const actualText = text
        if(!actualText) return
        const newTask = {id: Date.now(), title: text, state:false }
        onAddTask(newTask)
        setText('')
    }

    const handleClick = (task: Task) => {
        onUpdateTasks(tasks.map(t => t.id === task.id ? { ...t, state: !t.state } : t))
    }

    const clear = () => {
        onUpdateTasks(tasks.filter(t => !t.state))
    }
    return(
        <div className={`tasks-container ${className || ''}`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    required
                    id="text"
                    type="text"
                    value={text}
                    placeholder="Add a new task"
                    className="input-task"
                    onChange={(e) => setText(e.target.value)}
                    >
                    </input>
                    <button type="submit">Add</button>
                </div>
            </form>
            <div className='container'>
                {
                tasks
                .map(task => task &&
                        <div className={`tasks-card ${task.state === true ? 'compleated' : ''}`} key={task.id}>
                            <h1>{task.title}</h1>
                            <button onClick={() => handleClick(task)}>Check</button>
                        </div>
                    )
                }
            </div>
            <button onClick={() => clear()} className="clear-button">Clear Compleated</button>
        </div>

    )
}