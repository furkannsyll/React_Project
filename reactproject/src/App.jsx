import './App.css'
import Course from './Course';
import Angular from './assets/images/angular.jpg';
import Bootstrap5 from './assets/images/bootstrap5.png';
import Kompleweb from './assets/images/kompleweb.jpg';
import Csharp from './assets/images/ccsharp.png';

function App() {

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
                <div className="column">
                  <Course 
                  image={ Angular }
                  title="Angular" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
                  />
                </div>
                <div className="column">
                  <Course 
                  image={ Kompleweb }
                  title="Web Dev" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
                  />
                </div>
                <div className="column">
                  <Course 
                  image={ Bootstrap5 }
                  title="Bootstrap5" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
                  />
                </div>
                <div className="column">
                  <Course 
                  image={ Csharp }
                  title="C & CSharp" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis vel ullam accusamus laborum, corrupti praesentium culpa aut possimus maiores sed dolorem velit modi nesciunt maxime voluptatibus doloribus amet at."
                  />
                </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default App
