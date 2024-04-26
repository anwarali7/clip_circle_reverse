import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="root">
        <div className="container">
          <div className="clickable-background">
            this background has a clickable button<br />
            <button onClick={() => setCount((c) => c + 1)}>
              count is: {count}
            </button>
          </div>
          <a href="#" className="element-with-hole">
          </a>
        </div>
      </div>
    </>
  )
}

export default App
