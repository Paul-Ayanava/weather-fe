import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('test weather forecast application', () => {
  it('should render form on the page', () => {
    const weatherPageScreen = render(<App />)
    const globalHeader = weatherPageScreen.getByTestId('header')
    expect(globalHeader).toBeInTheDocument()
  })
})
