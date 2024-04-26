import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const nameSurname = "Furkan Soylu";
  const students    = 44000;
  const trueOrnot   = true;
  const date        = "date"
  const url         = "https://picsum.photos/200/300"

  return (
    <div className="App">
        <h1>Starting React Project</h1>
        <p>İsim Soyisim : { nameSurname }</p> 
        <p>{ students }</p>
        { trueOrnot ?  <div>İsim Soyisim : { nameSurname }</div> : <p>{ students }</p> }
        <input type= { date } />
        <div>
          <img src={ url } alt="picsum" />
        </div>
        <div className="box" style={{backgroundColor:"darkblue"}}>

        </div>
    </div>
  )
}

export default App
