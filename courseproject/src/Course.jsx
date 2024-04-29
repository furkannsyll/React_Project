import React from 'react'
import Angular from './assets/images/angular.jpg';
import Bootstrap5 from './assets/images/bootstrap5.png';
import Kompleweb from './assets/images/kompleweb.jpg';
import Csharp from './assets/images/ccsharp.png';

const courseMap = {
    Angular,
    Bootstrap5,
    Kompleweb,
    Csharp
}

const Course = ({courseName}) => {
    console.log(courseName)
  return (
    <div>
      <img src={ courseMap[courseName] } alt="" />
    </div>
  )
}

export default Course
