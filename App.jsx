import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Student Information</h2>

      <Student name="Aniket" course="B.Tech" marks="43" />
      <Student name="Amit" course="B.Tech" marks="09" />
      <Student name="Amrit" course="B.Tech" marks="78" />
    </div>
  )
}

export default App