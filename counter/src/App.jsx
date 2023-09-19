import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 15
  const addValue = () => {
    
   // counter = counter + 1
   setCounter(counter + 1)

  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }
  const refress = () => {
  setCounter(counter = 0)
  }

  return (
    <>
      <h1>Clicked the below button</h1>
      <h2>Counter value: {counter} </h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>footer: {counter}</p>
      <button
      onClick={refress}
      >Refress</button>
      
    </>
  )
}

export default App
