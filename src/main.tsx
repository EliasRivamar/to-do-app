import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TasksProvider } from './context/tasks.tsx'

createRoot(document.getElementById('root')!).render(
  <TasksProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TasksProvider>
)
