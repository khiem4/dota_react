import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Heroes from './components/Heroes'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Link style={{ padding: '5px' }} to="/">home</Link>
          <Link style={{ padding: '5px' }} to="/heroes">heroes</Link>
        </div>

        <Routes>
          <Route path="/heroes" element={<Heroes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
