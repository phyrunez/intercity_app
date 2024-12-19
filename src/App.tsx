import './App.css'
import { Toaster } from 'react-hot-toast'
import MainLayout from './components/MainLayout'

function App() {
  return (
    <div className='max-w-[1280px]'>
      <MainLayout />
      <Toaster />
    </div>
  )
}

export default App
