import { useState } from 'react'
import './App.css'
import Course from './Course';

function App() {

  return (
    <div className="App">
      <Course 
      title="Angular" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      title="Javascript" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      title="Html" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      title="Css" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
    </div>
  )
}

export default App
