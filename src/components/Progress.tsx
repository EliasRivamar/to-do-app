import {type ProgressCircleProps} from '../types/types.ts'

export function ProgressCircle({ progress }: ProgressCircleProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative size-36">
      <svg
        className="size-full"
        fill="none"
        strokeWidth="12"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-gray-200 dark:stroke-gray-700"
          cx="50"
          cy="50"
          r={radius}
        />

        
        <circle
          className="stroke-primary -rotate-90 origin-center transition-all duration-300"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[#111813] dark:text-white">
          {progress}%
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Done
        </span>
      </div>
    </div>
  );
}
