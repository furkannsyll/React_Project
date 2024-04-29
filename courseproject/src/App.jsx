import { useState } from 'react'
import './App.css'
import Course from './Course'

function getRandomCourse() {
  const courseArray = ['Angular','Bootstrap5','Csharp','Kompleweb']
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }
  const courseList = courses.map((course,index) => {
      return <Course key={ index } courseName={ course } />
    });

  return (
    <div className="App">
      <button onClick={ handleClick } >Add Course</button>
      {/* {
        courses.map((course,index) => {
          <Course key={ index } courseName={ course } />
        })
      } */}
      <div>{ courseList }</div>
    </div>
  )
}

export default App
