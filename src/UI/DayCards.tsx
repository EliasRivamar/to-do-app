import './styles.css'

type DayCardProps = {
    selectedDay: string;
    onSelectedDay: (day: string) => void;
    className?: string;
}

const getDays = () => {
    const today = new Date()
    const days = []
    for(let i = -2; i <= 5; i++){
        const date = new Date()
        date.setDate(today.getDate() + i)
        days.push(date)
    }
    return days
}

export default function DayCard({className, selectedDay, onSelectedDay}: DayCardProps) {
    const week = getDays()
    return (
        <div className={`days-container ${className || ''}`}>
            {
                week.map(i => i &&
                        <button className={ i.toDateString() === selectedDay ? 'day-card is-selected' : 'day-card'} key={i.toString()} onClick={() => onSelectedDay(i.toDateString())}>
                            <p>{i.toLocaleDateString('en-US', {weekday: 'long'})}</p>
                            <h2>{i.getDate()}</h2>
                        </button>
                )
            }
        </div>
    )
}