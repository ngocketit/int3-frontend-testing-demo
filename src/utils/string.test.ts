import { reverse } from './string'

describe('String utils', () => {
  it('should reserve a string', () => {
    const str = 'hello'
    expect(reverse(str)).toBe('olleh')
    expect(reverse('world')).toBe('dlrow')
  })

  it('should always succeed', () => {
    expect(true).toBeTruthy()
    expect(1 === 1).toBeTruthy()
    expect(false).toBeFalsy()
    expect(reverse('hi')).toHaveLength(2)
    expect([1,2,3]).toHaveLength(3)
  })

  beforeAll(() => {
  })

  afterAll(() => {
  })

  beforeEach(() => {
  })

  afterEach(() => {
  })
})
