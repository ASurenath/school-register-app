import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Students from './Pages/Students'
import Header from './Components/Header'

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/students'} element={<Students/>}/>
    </Routes>
      
    </>
  )
}

export default App
