import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar'

const handleClick = jest.fn()

describe('test searchbar component', () => {
  it('should call handleclick on pressing enter', async () => {
    const searchBarScreen = render(<SearchBar handleClick={handleClick} />)
    const searchbar = searchBarScreen.getByTestId('searchbar')
    expect(searchbar).toBeInTheDocument()
    const searchbarInput = searchBarScreen.getByTestId('searchbar-input')
    await userEvent.type(searchbarInput, 'kolkata')
    searchbarInput.focus()
    await userEvent.type(searchbarInput, '{enter}')
    expect(handleClick).toHaveBeenCalledWith('kolkata')
  })
})
