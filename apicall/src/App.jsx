import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchHeader />
    </div>
  )
}

export default App
