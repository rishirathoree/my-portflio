import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
