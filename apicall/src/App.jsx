import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './Api'

function App() {

  const handleSubmit = (term) => {
    searchImages(term);
  }

  return (
    <div className="App">
      <SearchHeader search={ handleSubmit } />
    </div>
  )
}

export default App
