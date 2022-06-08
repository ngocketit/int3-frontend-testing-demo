import { render, screen } from '@testing-library/react'

import CountryCard from './CountryCard'

describe('CountryCard', () => {
  test('render correctly', () => {
    const country = {
      name: 'Finland',
      population: 5000000,
      region: 'Europe',
      flag: '🇫',
    }
    render(<CountryCard country={country} />)
    screen.getByText('Finland')
    screen.getByText('Population: 5000000')
    screen.getByText('Region: Europe')
  })
})
