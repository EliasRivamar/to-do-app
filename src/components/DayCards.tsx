import { useState } from "react";
import Tasks from "./Tasks";
import { LeftIcon } from "../icons/LeftIcon";
import { RightIcon } from "../icons/RightIcon";
import { type Task } from "../types/types"
import { useTasks } from "../hooks/useTask";


const getDays = () => {
    const today = new Date();
    const days = [];
    for (let i = -2; i <= 5; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        days.push(date);
    }
    return days;
};

function formatDateKey(date: Date) {
    return date.toISOString().split("T")[0]; // "2025-11-28"
}

export default function DayCard() {
    const { tasks, addTask, updateTasks} = useTasks()
    const week = getDays();
    const [currentIndex, setCurrentIndex] = useState(2);

    // ⭐ STATE de tasks organizadas por día
    const [tasksByDay, setTasksByDay] = useState<{ [key: string]: Task[] }>({});

    const currentDay = week[currentIndex];
    const dayKey = formatDateKey(currentDay);
    const dayTasks = tasks.filter(t => t.day === dayKey);

    const prevDay = () =>
        setCurrentIndex((i) => (i === 0 ? week.length - 1 : i - 1));

    const nextDay = () =>
        setCurrentIndex((i) => (i === week.length - 1 ? 0 : i + 1));

    // --- HANDLERS ---
    const handleAddTask = (task: Task) => {
        setTasksByDay((prev) => ({
            ...prev,
            [dayKey]: [...(prev[dayKey] ?? []), task],
        }));
    };

    const handleUpdateTasks = (newTasks: Task[]) => {
        setTasksByDay((prev) => ({
            ...prev,
            [dayKey]: newTasks,
        }));
    };

    return (
        <div className="lg:col-span-2 flex flex-col gap-6 rounded-xl bg-white dark:bg-background-dark/50 p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-primary">
                        {currentDay.toLocaleDateString("en-US", { weekday: "long" })}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                        {currentDay.getDate()}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={prevDay} className="size-9 rounded-full"> <LeftIcon /> </button>
                    <button onClick={nextDay} className="size-9 rounded-full"> <RightIcon /> </button>
                </div>
            </div>

            {/* ⭐ Pasamos tasks reales del día */}
            <Tasks
                tasks={dayTasks}
                onAddTask={(t) => addTask({ ...t, day: dayKey })}
                onUpdateTasks={(newList) => updateTasks(dayKey, newList)}
            />

        </div>
    );
}
