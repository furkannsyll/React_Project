import './App.css'
import Course from './Course';
import Angular from './assets/images/angular.jpg';
import Bootstrap5 from './assets/images/bootstrap5.png';
import Kompleweb from './assets/images/kompleweb.jpg';
import Csharp from './assets/images/ccsharp.png';

function App() {

  return (
    <div className="App">
      <Course 
      image={ Angular }
      title="Angular" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      image={ Kompleweb }
      title="All Web Development" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      image={ Bootstrap5 }
      title="Bootstrap5" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
      <Course 
      image={ Csharp }
      title="C & CSharp" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
      />
    </div>
  )
}

export default App
