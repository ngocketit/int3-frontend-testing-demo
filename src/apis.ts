import axios from 'axios'

import { Country } from './types'

export async function getCountries(name: string): Promise<Country[]> {
  return axios.get(`https://restcountries.com/v3.1/name/${name}`)
    .then(resp => {
      return resp.data.map((item: any) => ({
        name: item.name.common,
        population: item.population,
        flag: item.flag,
        region: item.region,
      }))
    })
    .catch(error => {
      const errorMessage = error.response.data.message
      throw new Error(errorMessage)
    })
}
