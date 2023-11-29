import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Mansi",
    age : 23
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test </h1>
      <Card userName="ChaiaurCode" btnText="Click Me"/>
      <br/>
      <Card userName="Mansi" btnText="Visit Me"/>
    </>
  )
}

export default App
