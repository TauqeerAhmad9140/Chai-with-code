import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [Counter, setCounter ] = useState(15)

  //let Counter = 15

  const addValue = () => {
   // Counter = Counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(Counter - 1)
  }

 

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {Counter}</h2>

    <button
    onClick={addValue}
    >Add value </button>
    <br/>

    <button
    onClick={removeValue}
    >remove value </button>
    <p>footer</p>

    </>
  )
}

export default App
