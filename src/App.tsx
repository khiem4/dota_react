import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HeroStats from './components/HeroStats'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link style={{ padding: '5px' }} to="/">home</Link>
          <Link style={{ padding: '5px' }} to="/heroes">heroes</Link>
        </div>
        <Routes>
          <Route path="/heroes" element={<HeroStats />} />
          <Route path="/heroes/:id" element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
