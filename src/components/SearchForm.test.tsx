import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import SearchForm from './SearchForm'

describe('SearchForm', () => {
  test('render with error', async () => {
    const submitHandler = jest.fn()
    render(<SearchForm onSubmit={submitHandler} />)
    screen.getByRole('textbox')
    const button = screen.getByRole('button')
    screen.getByPlaceholderText('Type in a country name')
    fireEvent.click(button)
    await screen.findByText('Keyword is required')

    expect(submitHandler).toHaveBeenCalledTimes(0)
  })

  test('render with success', async () => {
    const submitHandler = jest.fn()
    render(<SearchForm onSubmit={submitHandler} />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    screen.getByPlaceholderText('Type in a country name')

    fireEvent.change(input, {
      target: { value: 'Finland' },
    })

    fireEvent.click(button)
    expect(screen.queryByText('Keyword is required')).not.toBeInTheDocument()

    await waitFor(() => {
      expect(submitHandler).toHaveBeenCalledTimes(1)
      expect(submitHandler).toHaveBeenCalledWith({
        keyword: 'Finland',
      }, expect.anything())
    })
  })
})
