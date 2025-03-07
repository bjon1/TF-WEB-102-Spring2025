import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title-container">
        <h1 className="title">On My Grind</h1>
        <h1>
          <p>So you think you can be a barista? Let's put that to the test...</p>
        </h1>
      </div>
      <BaristaForm />
    </>
  )
}

export default App
