import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from '../Landingpage/LandingPage'
const AppRouts = () => {
  return (
        <Router>
          <Routes>
          <Route path='/' element={<LandingPage/>} />
          </Routes>
            
        </Router>
  )
}

export default AppRouts