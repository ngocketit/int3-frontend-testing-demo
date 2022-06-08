import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { Country } from '../types'

type CountryCardProps = {
  country: Country
  onCountryClick?: (country: Country) => void
  noViewMore?: boolean
}

export default function CountryCard({ country, noViewMore, onCountryClick }: CountryCardProps) {
  const handleClick = () => {
    onCountryClick && onCountryClick(country)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h5">
          {country.name}
        </Typography>
        <Typography variant="body2">
          Population: {country.population}
        </Typography>
        <Typography variant="body2">
          Region: {country.region}
        </Typography>
        <Typography variant="body2">
          Flag: {country.flag}
        </Typography>
      </CardContent>
      {!noViewMore && (
        <CardActions>
          <Button size="small" onClick={handleClick}>View More</Button>
        </CardActions>
      )}
    </Card>
  )
}
