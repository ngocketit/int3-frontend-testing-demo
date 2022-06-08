import { useState, useEffect } from 'react'

import { Country } from '../types'
import { getCountries } from '../apis'

export default function useCountries(name: string): Country[] | null {
  const [countries, setCountries] = useState<Country[] | null>([])

  useEffect(() => {
    getCountries(name)
      .then(setCountries)
      .catch(error => {
        setCountries(null)
      })
  }, [setCountries, name])

  return countries
}
