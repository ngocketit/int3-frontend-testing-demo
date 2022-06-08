import CssBaseLine from '@mui/material/CssBaseline'
import { Routes, Route } from 'react-router'

import Appbar from './components/Appbar'
import Home from './views/Home'
import Country from './views/Country'

function App() {
  return (
    <>
      <CssBaseLine />
      <Appbar title="Testing demo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:countryName" element={<Country />} />
      </Routes>
    </>
  )
}

export default App
