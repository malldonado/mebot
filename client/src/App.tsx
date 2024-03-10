import { useState } from 'react'
import './App.css'
import Index from './components/Index';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
    </>
  )
}

export default App
