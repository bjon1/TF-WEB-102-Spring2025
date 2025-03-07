import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title-container">
        <img src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png" alt="On My Grind Logo" />
        <h1 className="title">On My Grind</h1>
        <p>So you think you can be a barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </>
  )
}

export default App
