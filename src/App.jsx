import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import '@fontsource/roboto/300.css';
import TodoForm from './TodoForm'; 
import WordFetcher from './WordFetcher'


function App() {
  const [count, setCount] = useState(0); 
  return (
      <>    
        {/* <TodoList/> */}
        <WordFetcher/>
      </>
  )
}

export default App
