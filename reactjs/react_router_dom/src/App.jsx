import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import { Home, About, Products } from './pages'
import Sidebar from './components/Sidebar'

function App() {
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
