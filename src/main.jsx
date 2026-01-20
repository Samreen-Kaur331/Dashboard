import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TaskProvider } from './context/TaskContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>,
)
