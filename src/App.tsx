import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import ModuleOneThree from './pages/ModuleOneThree'
import Module from './pages/Module'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/moduleonethree'  element={<ModuleOneThree />}/>
        <Route path='/module'  element={<Module />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App