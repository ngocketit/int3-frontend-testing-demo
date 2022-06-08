import { screen, fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
import * as api from '../apis'

describe('Home', () => {
  test('render with actual data: NOT GOOD', async () => {
    render(<BrowserRouter><Home /></BrowserRouter>)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: { value: 'Finland' },
    })
    fireEvent.click(button)
    await screen.findByText(/Population: /)
    await screen.findByText(/Region: Europe/)
  })

  test('render with success mocking', async () => {
    jest.spyOn(api, 'getCountries').mockReturnValue(Promise.resolve([
      {
        name: 'Country on Mars',
        population: 1000,
        flag: 'Mars',
        region: 'Mars',
      },
    ]))
    render(<BrowserRouter><Home /></BrowserRouter>)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: { value: 'Finland' },
    })
    fireEvent.click(button)
    await screen.findByText('Country on Mars')
    await screen.findByText(/Population: 1000/)
    await screen.findByText(/Region: Mars/)
  })

  test('render with error mocking', async () => {
    jest.spyOn(api, 'getCountries').mockReturnValue(Promise.reject(new Error('Something is wrong')))
    render(<BrowserRouter><Home /></BrowserRouter>)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: { value: 'Finland' },
    })
    fireEvent.click(button)
    await screen.findByText('No countries found')
  })
})
