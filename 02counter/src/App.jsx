import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(15)
    let [message, setMessage] = useState('')

    const addValue = () => {
      console.log("Value:",counter)
        // counter = counter + 1
        if(counter < 20){
            setCounter(counter + 1)
            setMessage(''); // Reset the message when decrementing

        }
        else{
            setMessage("The limit is up!")
        }
  }

  const removeValue = () => {
      console.log("Value:",counter)
      if(counter > 0){
          setCounter(counter - 1)
          setMessage(''); // Reset the message when decrementing

      }
      else{
          setMessage("The limit is up!")
      }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value:{counter}</h2>
        {message && <p>{message}</p>}

     <button
     onClick={addValue}
     >Add Value</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
