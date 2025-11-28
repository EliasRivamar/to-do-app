import { useState } from "react";
import Tasks from "./Tasks.tsx";
import { LeftIcon } from "../icons/LeftIcon.tsx";
import { RightIcon } from "../icons/RightIcon.tsx";
import { useTasks } from "../hooks/useTask.tsx";


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
    return date.toISOString().split("T")[0];
}

export default function DayCard() {
    const { tasks, addTask, updateTasks} = useTasks()
    const week = getDays();
    const [currentIndex, setCurrentIndex] = useState(2);

    const currentDay = week[currentIndex];
    const dayKey = formatDateKey(currentDay);
    const dayTasks = tasks.filter(t => t.day === dayKey);

    const prevDay = () =>
        setCurrentIndex((i) => (i === 0 ? week.length - 1 : i - 1));

    const nextDay = () =>
        setCurrentIndex((i) => (i === week.length - 1 ? 0 : i + 1));

    return (
        <div className="flex flex-col gap-6 rounded-xl bg-white lg:w-full dark:bg-background-dark/50 p-6">
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
                    <button onClick={prevDay} className="size-9 rounded cursor-pointer hover:bg-gray-200 justify-center place-items-center hover:scale-110 active:scale-90 duration-350 transition-all"> <LeftIcon /> </button>
                    <button onClick={nextDay} className="size-9 rounded cursor-pointer hover:bg-gray-200 justify-center place-items-center hover:scale-110 active:scale-90 duration-350 transition-all"> <RightIcon /> </button>
                </div>
            </div>

            
            <Tasks
                tasks={dayTasks}
                onAddTask={(t) => addTask({ ...t, day: dayKey })}
                onUpdateTasks={(newList) => updateTasks(dayKey, newList)}
            />

        </div>
    );
}
