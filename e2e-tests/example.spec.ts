import { test, expect } from '@playwright/test'
import { mockWeatherDetails } from '../src/mocks'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3001')

  // Expect a title "to contain" a substring.
  const pageHeader = await page.getByText('Predict weather of your city')
  await expect(page).toHaveTitle(/Weather forecaster/)
  expect(pageHeader).toBeDefined()
})

test('Get the result after searching for weather of a city', async ({
  page
}) => {
  await page.goto('http://localhost:3001')

  await page.route('http://localhost:3000/api/weather/*', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockWeatherDetails)
    })
  })
  // Fill up the city name and click the button
  await page.fill('[data-testid="searchbar-input"]', 'Kolkata')

  await page.click('[data-testid="searchbar-button"]')
  const forecastHeading = await page.getByText('Weather forecast for Kolkata')
  expect(forecastHeading).toBeDefined()
})
