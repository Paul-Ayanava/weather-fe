import React, { useRef, KeyboardEvent } from 'react'
import { SearchBarProps } from './SearchBar.types'
import './SearchBar.styles.scss'

const SearchBar = ({ handleClick, addClasses }: SearchBarProps) => {
  const searchedValue = useRef<HTMLInputElement>(null)
  const className = addClasses ? addClasses : 'searchbar'
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick(searchedValue.current?.value as string)
    }
  }
  return (
    <div className={className} data-testid="searchbar">
      <input
        type="text"
        ref={searchedValue}
        className="searchbar__input"
        data-testid="searchbar-input"
        name="search weather of city"
        onKeyDown={(e) => onKeyPress(e)}
      />
      <button
        onClick={() => handleClick(searchedValue.current?.value as string)}
        className="searchbar__button"
        data-testid="searchbar-button"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
