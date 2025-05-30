import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter+=1
    setCounter(counter+1)
  }

  const removeValue = () => {
    // counter+=1
    setCounter(counter-1)
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
