import { useParams } from 'react-router'

import CountryCard from '../components/CountryCard'
import useCountries from '../hooks/useCountry'

export default function Country() {
  const { countryName } = useParams()
  const countries = useCountries(countryName!)

  if (!countries || !countries.length) return null

  return (
    <CountryCard noViewMore country={countries[0]} />
  )
}
