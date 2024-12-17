import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import Ecommerce from './Components/Ecommerce';
import Dashboard from './Components/Dashboard';
import Randring from './Components/Randring'


function App() {

  return (
    <>
      <div>
       <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='ecommerce' element={<Ecommerce/>}/>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='randring' element={<Randring/>}/>
            </Routes>
       </Router>
      </div>
    </>
  )
}

export default App
