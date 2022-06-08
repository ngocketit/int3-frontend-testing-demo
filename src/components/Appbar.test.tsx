import { render, screen } from '@testing-library/react'

import Appbar from './Appbar'

describe('Appbar', () => {
  test('render correctly', () => {
    render(<Appbar title="Demo" />)
    screen.getByText('Demo')
    screen.getByRole('heading')
  })
})
