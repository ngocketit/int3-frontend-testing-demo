import { renderHook } from '@testing-library/react-hooks'

import useCountries from './useCountry'

test('success (but not reliable)', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCountries('Finland'))

  expect(result.current).toHaveLength(0)
  await waitForNextUpdate()
  expect(result.current).toHaveLength(1)
})
