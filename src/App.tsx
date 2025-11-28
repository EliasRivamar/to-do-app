import { Header } from './components/Header'
import DayCard from './components/DayCards'
import { Stadistics } from './components/Stadistics'

export default function App() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark text-[#1F2937] dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-5">
              <div className="layout-content-container flex flex-col max-w-full mx-auto">
                <h1 className="text-[#111813] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Weekly Planner </h1>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Follow your weekly tasks with weekly planner.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 flex flex-col gap-6 rounded-xl bg-white dark:bg-background-dark/50 p-6 border border-gray-200 dark:border-gray-700 min-h-[480px]">
                    <div className="flex items-center justify-between">
                      <DayCard />
                    </div>

                  </div>
                  <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    <Stadistics />

                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  )

}
