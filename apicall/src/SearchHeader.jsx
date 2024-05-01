import React, { useState } from 'react'

const SearchHeader = ( { search } ) => {
  const [value, setValue] = useState('')
  const handleFormSubmit = (event) => {
      event.preventDefault();
      search( value );
  }

  const handleChange = (event) => {
      setValue( event.target.value );
  }

  return (
    <div className='search-wrapper'>
      <form onSubmit={ handleFormSubmit }>
        <label>What are you looking for</label>
        <input value={ value } onChange={ handleChange } />
      </form>
    </div>
  )
}

export default SearchHeader
