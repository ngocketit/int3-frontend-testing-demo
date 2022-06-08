import { sum } from './math'

describe('Math utils', () => {
  test('sum', () => {
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21)
  })
})
