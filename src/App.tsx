import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HeroAbilities from './components/HeroAbilities'
import Footer from './components/Footer'
import HeroStats from './components/HeroeStats'
import { useEffect, useState } from 'react'
import { getHeroStats } from './services/openDotaApi'

function App() {
  const [heroes, setHeroes] = useState<HeroStats[]>()

  useEffect(() => {
    (async () => {
      const res = await getHeroStats()
      setHeroes(res)
    })()
  }, [])

  if (heroes) {
    return (
      <BrowserRouter>
        <div>
          <Link style={{ padding: '5px' }} to="/">home</Link>
          <Link style={{ padding: '5px' }} to="/heroes">heroes</Link>
        </div>
        <Routes>
          <Route
            path="/heroes"
            element={<HeroStats heroes={heroes} />}
          />
          <Route
            path="/heroes/:id"
            element={<HeroAbilities heroes={heroes} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

  return null
}

export default App
