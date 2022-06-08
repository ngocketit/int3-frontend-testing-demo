import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SearchForm, { SearchFormValues } from '../components/SearchForm'
import { useNavigate } from 'react-router'

import ContentContainer from '../components/ContentContainer'
import { getCountries } from '../apis'
import { Country } from '../types'
import CountryCard from '../components/CountryCard'

export default function Home() {
  const [countries, setCountries] = useState<Country[] | null>([])
  const navigate = useNavigate()

  const handleSubmit = async ({ keyword }: SearchFormValues) => {
    try {
      const countries = await getCountries(keyword)
      setCountries(countries)
    } catch (error) {
      setCountries(null)
    }
  }

  const handleCountryClick = (country: Country) => {
    navigate(`/countries/${country.name}`)
  }

  return (
    <ContentContainer>
      <SearchForm onSubmit={handleSubmit} />
      <Box sx={{mt: 2}}>
        {!countries && (
          <Typography component="p">No countries found</Typography>
        )}
        <Grid container spacing={2}>
          {countries && countries.map(country => (
            <Grid key={country.name} item xs={3}>
              <CountryCard country={country} onCountryClick={handleCountryClick} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContentContainer>
  )
}
